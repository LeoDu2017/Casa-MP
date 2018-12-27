import store from '@/status/store.js'
import CommonBanner from '@/components/common-banner.vue'
import CommonLoading from '@/components/common-loading.vue'
export default {
  data () {
    return {
      gallery: [],
      subtitle: '',
      prod_name: '',
      origin: '',
      style: '',
      comProd: null,
      cases: null,
      product_tag: null,
      is_activity: null,
      activity: null
    }
  },
  components: {
    CommonBanner,
    CommonLoading
  },
  onLoad (options) {
    store.commit('showLoading')
    const {id} = options
    wx.request({
      url: `${store.state.url}/wxapi/product/prod_detail`,
      method: 'GET',
      data: {id},
      header: {
        'Accept': 'application/json'
      },
      success: (res) => {
        setTimeout(() => { store.commit('hideLoading') }, 4500)
        /* jshint ignore:start */
        const {gallery, subtitle, origin, style, article, activity} = res.data.data
        /* jshint ignore:end */
        this.gallery = gallery
        // prod_name,com_prod, article_option_name,is_activity,
        // this.subtitle = subtitle
        // this.prod_name = prod_name
        // this.origin = origin
        // this.style = style
        // this.comProd = com_prod
        // this.cases = article
        // this.product_tag = article_option_name
        // this.is_activity = is_activity
        // this.activity = activity

        console.log(subtitle, origin, style, article, activity)
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
