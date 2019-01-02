import store from '@/status/store'
import UTitle from '@/components/units/u-title'
import UInput from '@/components/units/u-input'

export default {
  data () {
    return {
      hide: true,
      phoneNumber: null,
      password: null,
      productId: null
    }
  },
  components: {
    UTitle,
    UInput
  },
  methods: {
    onSee () {
      this.hide = !this.hide
    },
    setPhone (val) {
      this.phoneNumber = val
    },
    setPassword (val) {
      this.password = val
    },
    onSubmit () {
      if (!this.phoneNumber) {
        wx.showToast({
          title: '请输入您的手机',
          icon: 'none'
        })
        this.phoneNumber = null
        return
      }
      if (!this.setPassword) {
        wx.showToast({
          title: '请输入密码',
          icon: 'none'
        })
        return
      }
      wx.request({
        url: `${store.state.url}/wxapi/login/ajaxLogin`,
        method: 'POST',
        data: {
          csr_account: this.phoneNumber,
          csr_password: this.password
        },
        success: (res) => {
          const {status} = res.data;
          if (status === 1) {
            wx.removeStorage({ key: 'token'});
            wx.setStorage({
              key: 'token',
              data: res.data,
            })
            wx.showToast({
              title: '登录成功',
              icon: 'none'
            })
            if (productId) {
              wx.redirectTo({
                url: `/pages/product/detail/main?id=${this.productId}`
              })
              return
            } else {
              wx.reLaunch({
                url: '/pages/account/account'
              })
              return
            }
            return
          } else if (status === 0) {
            wx.showModal({
              title: '提示',
              content: '账号或密码错误',
              showCancel: false,
              success: function (m) {
                if (m.confirm) {

                }
              }
            })
            return false;
          }
        },
        fail: () => {
          wx.showToast({
            title: '网络链接失败，请检查网络链接',
            icon: 'none'
          })
          return false
        }
      })
    }
  },
  onLoad (options) {
    const {productId} = options
    if (productId) {
      this.productId =  productId
    }
  }
}
