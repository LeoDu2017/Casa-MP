import store from '@/status/store'
import CommonSearch from '@/components/common-search'
import CommonLoading from '@/components/common-loading'
import CommonBanner from '@/components/common-banner'
import CommonDivision from '@/components/common-division'
import HomeSlogan from '@/components/home-slogan'
import HomePromotion from '@/components/home-promotion'
import HomeSpaces from '@/components/home-spaces'
import HomeShowcase from '@/components/product-showcase'
import HomeCategory from '@/components/home-category.vue'
import HomeBrands from '@/components/home-brands.vue'
import HomeDash from '@/components/home-dash.vue'
import TabBar from '@/components/common-tabBar.vue'

export default {
  data () {
    return {
      show: true,
      banner: [],
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      promotion: {
        title: '双十一活动精选',
        goods: []
      }
    }
  },
  components: {
    CommonSearch,
    CommonLoading,
    CommonBanner,
    HomeSlogan,
    HomePromotion,
    HomeSpaces,
    CommonDivision,
    HomeShowcase,
    HomeCategory,
    HomeBrands,
    HomeDash,
    TabBar
  },
  computed:{
    serverSide () {
      return store.state.serverSide
    }
  },
  onLoad () {
    store.commit('showLoading')
    wx.request({
      url: `${this.serverSide}/wxapi/index/index`,
      method: 'GET',
      header: {
        'Accept': 'application/json'
      },
      success: ({data: {data, data:{resource: {a, b, c, d}}}}) => {
        // setTimeout(() => {
        //
        // }, 4500)
        store.commit('hideLoading')
        wx.setNavigationBarColor({
          frontColor: '#000000',
          backgroundColor: '#ffffff',
          animation: {
            duration: 100,
            timingFunc: 'easeIn'
          }
        })
        Object.assign(this, data, {a: a.about_company, b: b.about_company, c: c.about_company, d: d.about_company})
      },
      fail () {
        wx.showToast({
          title: '网络链接失败，请检查网络链接',
          icon: 'none'
        })
      }
    })
  },
  methods: {
    onAdd () {
      const {a, b, c, d} = this
      this.countUp('a', a, 10, 100)
      this.countUp('b', b, 1, 1000)
      this.countUp('c', c, 50, 50)
      this.countUp('d', d, 50, 10)
    },
    countUp (key, value, t, m) {
      let i = 0
      let time = setInterval(() => {
        i +=  Math.floor(Math.random()*(1 - m) + m)
        this[key] = i > value ? value : i
        if(this[key] === value){
          clearInterval(time)
        }
      }, t)
    }
  }
}
