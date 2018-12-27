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
        const {gallery, subtitle, origin, style, article, activity, attr} = res.data.data
        this.prod_name = res.data.data.prod_name
        this.product_tag = res.data.data.article_option_name
        this.is_activity = res.data.data.is_activity
        this.comProd = res.data.data.com_prod
        this.act_attr = res.data.data.act_attr
        this.gallery = gallery
        this.subtitle = subtitle
        this.origin = origin
        this.style = style
        this.cases = article
        this.activity = activity
        this.attr = attr

      },
      fail: () => { }
    })
  },
  onShow () {
    wx.setNavigationBarTitle({
      title: '商品详情'
    })
  }
}
