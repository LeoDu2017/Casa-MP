// import { mapActions } from 'vuex'
import { isPhoneNo, isEmail, formatNumber } from '@/utils/index'
import store from '@/status/store'
import UTitle from '@/components/units/u-title'
import UInput from '@/components/units/u-input'
import CommonLoading from '@/components/common-loading'
import CommonDivision from '@/components/common-division'
import TabBar from '@/components/common-tabBar.vue'

export default {
  data () {
    return {
      timeState: '获取验证码',
      page: '',
      phone: null,
      code: null,
      password: null,
      password_02: null,
      isSend: false,
      sex: 0,
      picked: '',
      currentTime: 60,
      hide01: true,
      hide02: true,
      email: null,
      productId: null,
      height: 0
    }
  },
  computed: {
    isLogin () {
      return store.state.isLogin
    },
    phone () {
      const tel = "" + store.state.phone;
      const reg=/(\d{3})\d{4}(\d{4})/;
      return tel.replace(reg, "$1****$2")
    }
  },
  components: {
    UTitle,
    UInput,
    CommonLoading,
    CommonDivision,
    TabBar
  },
  onLoad (option) {
    store.commit('showLoading')
    const {page} = option
    const title = this.getPageTitle(page)
    wx.setNavigationBarTitle({
      title: title
    })
    setTimeout(() => {
      store.commit('hideLoading')
    }, 4500)
  },
  onReady () {
    this.drawWave()
  },
  methods: {
    // ...mapActions({
    //   saveName: 'saveName'
    // }),
    setPhone (val) {
      this.phone = val
    },
    setPassword (val) {
      this.password = val
    },
    confirmPassword (val) {
      this.password_02 = val
    },
    setCode (val) {
      this.code = val
    },
    setSex (e) {
      const {target:{value}} = e
      this.sex = value
    },
    setEmail (val) {
      this.email = val
    },
    onGain () {
      const interval = setInterval(() => {
        this.timeState = `${formatNumber(this.currentTime)} 秒`
        if(this.currentTime-- === 0){
          this.timeState = '重新发送'
          this.currentTime = 60
          clearInterval(interval)
        }
      },1000)
    },
    getCode () {
      if(!isPhoneNo(this.phone)){
        wx.showToast({
          title: '请输入正确的手机号码',
          icon: 'none'
        })
        return
      } else if (this.currentTime !== 60) {
        return
      }
      wx.request({
        url: `${store.state.url}/wxapi/base/getPhoneCode`,
        method: 'GET',
        data: {
          phone: this.phone
        },
        header: {
          'Accept': 'application/json'
        },
        success: (res) => {
          if (res.data.status === 1) {
            this.isSend = true
            this.onGain()
          } else if (res.data.status === 0) {
            wx.showToast({
              title: '验证码发送失败，请重试',
              icon: 'none'
            })
            return false;
          }
        }
      })
    },
    onSee (state) {
      this[state] = !this[state]
    },
    onSubmit (type) {
      const {url,data,success_hint,reLaunch,fail_hint} = this.submit_parameters(type)
      if (!this.verification()) {
        return
      }
      wx.request({
        url: url,
        method: 'POST',
        data: data,
        header: {
          'Accept': 'application/json'
        },
        success: res => {
          const { status,msg,data } = res.data
          if(status === 1){
            wx.showToast({
              title: success_hint,
              icon: 'none'
            })
            this.page === 'sign' && wx.reLaunch({
              url: reLaunch,
            })
            if (this.page === 'login') {
              wx.removeStorage({ key: 'token'})
              wx.setStorage({
                key: 'token',
                data: data
              })
              console.log(this.$store)
              store.commit('onLogin')
              store.commit('setPhone', this.phone);
              this.productId ? wx.redirectTo({
                url: `/pages/product/detail/main?id=${this.productId}`
              }) : wx.reLaunch({
                url: reLaunch
              })

            }

            this.page === 'forget' && wx.navigateBack({
              delta: 1
            })
          } else if (status === -3) {
            wx.showModal({
              title: '提示',
              content: '验证码错误',
              showCancel: false,
            })
          }else if (status === -4) {
            wx.showModal({
              title: '提示',
              content: '手机号已存在',
              showCancel: false,
            })
          }else if (status === -7) {
            wx.showModal({
              title: '提示',
              content: '手机号错误',
              showCancel: false,
            })
          } else if (status === 0) {
            wx.showModal({
              title: '提示',
              content: fail_hint ? fail_hint : msg,
              showCancel: false
            })
          } else if (res.data.status === -13) {
            wx.showModal({
              title: '提示',
              content: '该账户不存在',
              showCancel: false,
            })
          }
        },
        fail: () => {
          wx.showToast({
            title: '网络链接失败，请检查网络链接',
            icon: 'none'
          })
        }
      });
    },
    submit_parameters (type) {
      this.page = type
      return {
        sign: {
          url: `${store.state.url}/wxapi/login/ajaxEnroll`,
          data: {
            'csr_mobile': this.phone,
            'code': this.code,
            'csr_password': this.password,
            'csr_email': this.email,
            'csr_sex': this.sex
          },
          success_hint: '注册成功',
          fail_hint: '注册失败，请联系客服解决',
          reLaunch: '/pages/ucenter/login/main'
        },
        login: {
          url: `${store.state.url}/wxapi/login/ajaxLogin`,
          data: {
            csr_account: this.phoneNumber,
            csr_password: this.password
          },
          success_hint: '登录成功',
          fail_hint: '账号或密码错误',
          reLaunch: '/pages/ucenter/account/main'
        },
        forget: {
          url: `${store.state.url}/wxapi/login/ajaxRetrievePassword`,
          data: {
            csr_mobile: this.phone,
            code: this.code,
            csr_password: this.password
          },
          success_hint: '密码修改成功',
          fail_hint: null
        }
      }[type]
    },
    verification () {
      if (!isPhoneNo(this.phone)) {
        wx.showToast({
          title: '请输入正确的手机号码！',
          icon: 'none'
        })
        return false
      }
      if (!this.isSend && this.page !== 'login') {
        wx.showToast({
          title: '您还没有获取验证码，请获取验证码后再提交！',
          icon: 'none'
        })
        return false
      }
      if (!this.code && this.page !== 'login') {
        wx.showToast({
          title: '请输入您收到的验证码！',
          icon: 'none'
        })
        return false
      }
      if (!this.password) {
        wx.showToast({
          title: '请设置您的登录密码！',
          icon: 'none'
        })
        return false
      }
      if (!this.password_02 && this.page !== 'login') {
        wx.showToast({
          title: '请确认您的登录密码！',
          icon: 'none'
        })
        return false
      }
      if (this.password !== this.password_02 && this.page !== 'login') {
        wx.showToast({
          title: '您两次输入的密码不相同，请检查后提交！',
          icon: 'none'
        })
        return false
      }
      if (this.email && !isEmail(this.email)) {
        wx.showToast({
          title: '请输入正确的邮箱地址，或者留空！',
          icon: 'none'
        })
        return false
      }
      return true
    },
    drawWave () {
      const ctx = wx.createCanvasContext('wave')
      const width = wx.getSystemInfoSync().windowWidth
      this.height = width / 2
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(0, this.height - 30)
      ctx.bezierCurveTo(width / 4, this.height + 20, width * 3 / 4, this.height - 70, width, this.height - 30)
      ctx.lineTo(width, 0)
      ctx.fillStyle = '#212224'
      ctx.closePath()
      ctx.fill()
      ctx.draw()
    },
    exit () {
      wx.showModal({
        title: '提示',
        content: '确认退出登陆?',
        success: res => {
          if (res.confirm) {
            wx.removeStorage({key: 'token'})
            store.commit('onExit')
          }
        }
      })
    },
    getPageTitle (page) {
      return {
        login: '登录',
        sign: '注册',
        forget: '找回密码',
        information: '个人信息',
        account: '个人中心'
      }[page]
    }
  }
}
