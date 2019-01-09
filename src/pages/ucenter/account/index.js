import store from '@/status/store'
import CommonLoading from '@/components/common-loading'
import CommonDivision from '@/components/common-division'
import TabBar from '@/components/common-tabBar.vue'

export default {
  data () {
    return {
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
  onShow () {

  },
  onLoad () {
    store.commit('showLoading')
    wx.setNavigationBarTitle({
      title: '个人中心'
    })
    setTimeout(() => {
      store.commit('hideLoading')
    }, 4500)
  },
  onReady () {
    this.drawWave()
    // store.state.isLogin && this.getUserInfo()
  },
  components: {
    CommonDivision,
    CommonLoading,
    TabBar
  },
  methods: {
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
    // getUserInfo () {
    //   wx.getUserInfo({
    //     success: res => {
    //       console.log(res);
    //       // var avatarUrl = 'userInfo.avatarUrl';
    //       // var nickName = 'userInfo.nickName';
    //       // that.setData({
    //       //   [avatarUrl]: res.userInfo.avatarUrl,
    //       //   [nickName]:res.userInfo.nickName,
    //       // })
    //     }
    //   })
    // }
  }
}
