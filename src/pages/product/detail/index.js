import store from '@/status/store.js'
import CommonBanner from '@/components/common-banner.vue'
import CommonLoading from '@/components/common-loading.vue'
import CommonDivision from '@/components/common-division.vue'
import ProductInfo from '@/components/product-info.vue'
export default {
  data () {
    return {
      gallery: [],
      attr: [],
      act_attr: [],
      subtitle: '',
      prod_name: '',
      origin: '',
      style: '',
      is_wish: false,
      is_collect: false,
      comProd: null,
      cases: null,
      product_tag: null,
      is_activity: null,
      activity: null,
      start: null,
      end: null
    }
  },
  components: {
    CommonBanner,
    CommonLoading,
    ProductInfo,
    CommonDivision
  },
  onLoad (options) {
    store.commit('showLoading')
    const {id} = options
    wx.request({
      url: `${store.state.url}/wxapi/product/prod_detail`,
      method: 'GET',
      data: {id:25758},
      header: {
        'Accept': 'application/json'
      },
      success: (res) => {
        setTimeout(() => { store.commit('hideLoading') }, 4500)
        this.setData(res.data.data)
      },
      fail: () => { }
    })
  },
  onShow () {
    wx.setNavigationBarTitle({
      title: '商品详情'
    })
  },
  methods: {
    setData (res) {
      const {gallery, subtitle, origin, style, article, activity, attr} = res
      this.prod_name = res.prod_name
      this.product_tag = res.article_option_name
      this.is_activity = res.is_activity
      this.comProd = res.com_prod
      this.act_attr = res.act_attr
      this.is_wish = res.is_wish
      this.is_collect = res.is_collect
      this.gallery = gallery
      this.subtitle = subtitle
      this.origin = origin
      this.style = style
      this.cases = article
      this.activity = activity
      this.attr = attr
    }
  }
}
