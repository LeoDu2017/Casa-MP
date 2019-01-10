import store from '@/status/store'
import CommonSearch from '@/components/common-search'
import CommonLoading from '@/components/common-loading'
import CommonBanner from '@/components/common-banner'
import CommonDivision from '@/components/common-division'
import HomeSlogan from '@/components/home-slogan'
import HomePromotion from '@/components/home-promotion'
import HomeSpaces from '@/components/home-spaces'
import HomeShowcase from '@/components/home-showcase'
import HomeCategory from '@/components/home-category.vue'
import HomeBrands from '@/components/home-brands.vue'
import HomeDash from '@/components/home-dash.vue'
import TabBar from '@/components/common-tabBar.vue'

export default {
  data () {
    return {
      show: true,
      banner: [],
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
  methods: {
    menuToggle (toggle) {
      this.on = toggle
    }
  },
  computed:{
    serverSide () {
      return store.state.serverSide
    }
  },
  onLoad () {
    store.commit('showLoading')
    const {serverSide} = this
    wx.request({
      url: `${serverSide}/wxapi/index/index`,
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: ({data: {data: {spaces, banner, purchase, recommend, like, prodlist, brand, resource: {a, b, c, d}}}}) => {
        setTimeout(() => {
          store.commit('hideLoading')
          wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#ffffff',
            animation: {
              duration: 100,
              timingFunc: 'easeIn'
            }
          })
        }, 4500)
        Object.assign(this, {spaces}, {banner}, {purchase}, {recommend}, {like}, {prodlist}, {brand}, {dash:[
            {
              title: '合作厂商',
              data: a.about_company
            },
            {
              title: '在售产品',
              data: b.about_company
            },
            {
              title: '全国案例',
              data: c.about_company
            },
            {
              title: '全球员工',
              data: d.about_company
            }
          ]})
      },
      fail () {

      }
    })
  }
}
