import store from '@/status/store.js'
import CommonBanner from '@/components/common-banner.vue'
import CommonLoading from '@/components/common-loading.vue'
import CommonDivision from '@/components/common-division.vue'
import ProductInfo from '@/components/product-info.vue'
import ProductRecommend from '@/components/product-recommend.vue'
import ProductDetails from '@/components/product-details.vue'
import DTitle from '@/components/units/d-title.vue'
import DInput from '@/components/units/d-input.vue'

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
      is_collect: false,
      comProd: null,
      product_tag: null,
      is_activity: null,
      activity: null,
      start: null,
      end: null
    }
  },
  computed:{
    serverSide () {
      return store.state.serverSide
    },
    phone () {
      return store.state.phone
    }
  },
  components: {
    CommonBanner,
    CommonLoading,
    ProductInfo,
    CommonDivision,
    ProductRecommend,
    ProductDetails,
    DTitle,DInput
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
  methods: {
    setValue (val) {
      console.log(val)
    }
  },
  // methods: {
  //   setData (res) {
  //     const {gallery, subtitle, origin, style, article, activity, attr, modular} = res
  //     this.prod_name = res.prod_name
  //     this.product_tag = res.article_option_name
  //     this.is_activity = res.is_activity
  //     this.comProd = res.com_prod
  //     this.act_attr = res.act_attr
  //     this.is_wish = res.is_wish
  //     this.is_collect = res.is_collect
  //     this.gallery = gallery
  //     this.subtitle = subtitle
  //     this.origin = origin
  //     this.style = style
  //     this.article = article
  //     this.activity = activity
  //     this.attr = attr
  //     this.modular = modular
  //   }
  // },
  onShareAppMessage () {
    return {
      title: this.prod_name,
      imageUrl: this.gallery[0].img_url
    }
  }
}
