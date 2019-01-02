import { isPhoneNo } from '@/utils/index'
import UTitle from '@/components/units/u-title'
import UInput from '@/components/units/u-input'
export default {
  data () {
    return {
      phone: null,
      password: null,
      sex: 0,
      picked: ''
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
    setSex (e) {
      const {target:{value}} = e
      this.sex = value
    },
    setEmail () {

    },
    onGain () {
      if(!isPhoneNo(this.phone)){
        wx.showToast({
          title: '请输入正确的手机号码',
          icon: 'none'
        })
        return
      }
    }
}
}
