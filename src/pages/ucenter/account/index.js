import CommonDivision from '@/components/common-division'
import TabBar from '@/components/common-tabBar.vue'
export default {
  data () {
    return {
      height: 0
    }
  },
  onShow () {

  },
  onLoad () {
    wx.setNavigationBarTitle({
      title: '个人中心'
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#212224',
      animation: {
        duration: 100,
        timingFunc: 'easeIn'
      }
    })
  },
  onReady () {
    this.drawWave()
  },
  components: {
    CommonDivision,
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
    }
  }
}
