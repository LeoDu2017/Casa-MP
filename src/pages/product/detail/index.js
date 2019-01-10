import store from '@/status/store.js'
import CommonBanner from '@/components/common-banner.vue'
import CommonLoading from '@/components/common-loading.vue'
import CommonDivision from '@/components/common-division.vue'
import ProductInfo from '@/components/product-info.vue'
import ProductRecommend from '@/components/product-recommend.vue'
import ProductDetails from '@/components/product-details.vue'
export default {
  data () {
    return {
      id: null,
      gallery: [],
      attr: [],
      act_attr: [],
      modular: [],
      article: [],
      subtitle: '',
      prod_name: '',
      origin: '',
      style: '',
      is_wish: false,
      is_collect: false
    }
  },
  computed:{
    serverSide () {
      return store.state.serverSide
    }
  },
  components: {
    CommonBanner,
    CommonLoading,
    ProductInfo,
    CommonDivision,
    ProductRecommend,
    ProductDetails
  },
  onLoad (options) {
    store.commit('showLoading')
    const {id} = options
    this.id = id ? id : 25758

    wx.request({
      url: `${this.serverSide}/wxapi/product/prod_detail`,
      method: 'GET',
      data: {id: this.id},
      header: {
        'Accept': 'application/json'
      },
      success: ({data: {data}}) => {
        setTimeout(() => { store.commit('hideLoading') }, 4500)
        Object.assign(this, data)
      },
      fail () {
        wx.showToast({
          title: '网络链接失败，请检查网络链接',
          icon: 'none'
        })
      }
    })
  },
  onShow () {
    wx.setNavigationBarTitle({
      title: '商品详情'
    })
  },
  onShareAppMessage () {
    return {
      title: this.prod_name,
      imageUrl: this.gallery[0].img_url
    }
  }
}
