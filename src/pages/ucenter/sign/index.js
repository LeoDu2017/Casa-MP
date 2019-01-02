import { isPhoneNo, formatNumber } from '@/utils/index'
import store from '@/status/store'
import UTitle from '@/components/units/u-title'
import UInput from '@/components/units/u-input'
export default {
  data () {
    return {
      timeState: '获取验证码',
      phone: null,
      password: null,
      sex: 0,
      picked: '',
      currentTime: 60,
      hide01: true,
      hide02: true,
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
      if (this.password !== val){
        wx.showToast({
          title: '两次输入的密码不相同！',
          icon: 'none'
        })
      }
    },
    setSex (e) {
      const {target:{value}} = e
      this.sex = value
    },
    setEmail () {

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
    }
  }
}
