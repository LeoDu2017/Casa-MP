import { isPhoneNo, isEmail, formatNumber } from '@/utils/index'
import store from '@/status/store'
import UTitle from '@/components/units/u-title'
import UInput from '@/components/units/u-input'
export default {
  data () {
    return {
      timeState: '获取验证码',
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
      productId: null
    }
  },
  components: {
    UTitle,
    UInput
  },
  methods: {
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
      const submit_parameters = {
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
          reLaunch:''
        },
        forget: {
          url: `${store.state.url}/wxapi/login/ajaxRetrievePassword`,
          data: {
            csr_mobile: this.phone,
            code: this.code,
            csr_password: this.password
          },
          success_hint: '密码修改成功',
          fail_hint: res.data.msg,
        }
      }
      if (!this.verification()) {
        console.log('验证不通过');
        return
      }
      wx.request({
        url: submit_parameters[type].url,
        method: 'POST',
        data: submit_parameters[type].data,
        header: {
          'Accept': 'application/json'
        },
        success: (res) => {
          if(res.data.status === 1){
            wx.showToast({
              title: submit_parameters[type].success_hint,
              icon: 'none'
            })
            wx.reLaunch({
              url: submit_parameters[type].reLaunch,
            })
            if (type === 'login') {
              wx.removeStorage({ key: 'token'});
              wx.setStorage({
                key: 'token',
                data: res.data,
              })
              if (productId) {
                wx.redirectTo({
                  url: `/pages/product/detail/main?id=${this.productId}`
                })
              } else {
                wx.reLaunch({
                  url: '/pages/account/account'
                })
              }
            }
            if (type === 'forget') {
              setTimeout(function () {
                wx.navigateBack({
                  delta: 1
                })
              })
            }
          } else if (res.data.status === -3) {
            wx.showModal({
              title: '提示',
              content: '验证码错误',
              showCancel: false,
            })
          }else if (res.data.status === -4) {
            wx.showModal({
              title: '提示',
              content: '手机号已存在',
              showCancel: false,
            })
          }else if (res.data.status === -7) {
            wx.showModal({
              title: '提示',
              content: '手机号错误',
              showCancel: false,
            })
          } else if (status === 0) {
            wx.showModal({
              title: '提示',
              content: submit_parameters[type].fail_hint,
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
    verification () {

      if (!isPhoneNo(this.phone)) {
        wx.showToast({
          title: '请输入正确的手机号码！',
          icon: 'none'
        })
        return false
      }
      if (!this.isSend) {
        wx.showToast({
          title: '您还没有获取验证码，请获取验证码后再提交！',
          icon: 'none'
        })
        return false
      }
      if (!this.code) {
        console.log(this.code)
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
      if (!this.password_02) {
        wx.showToast({
          title: '请确认您的登录密码！',
          icon: 'none'
        })
        return false
      }
      if (this.password !== this.password_02) {
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
    }
  }
}
