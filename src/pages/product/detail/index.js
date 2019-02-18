import store from '@/status/store.js'
import CommonBanner from '@/components/common-banner.vue'
import CommonLoading from '@/components/common-loading.vue'
import CommonDivision from '@/components/common-division.vue'
import ProductInfo from '@/components/product-info.vue'
import ProductRecommend from '@/components/product-recommende.vue'
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
      origin: '',
      style: '',
      is_wish: false,
      is_collect: false,
      comProd: null,
      product_tag: null,
      is_activity: null,
      activity: null,
      start: null,
      end: null,
      address: null,
      remark: null,
      prod_name: null,
      prod_image: null,
      total: null,
      is_spots: 0,
      price: 0,
      sale_price: 0,
    }
  },
  computed:{
    serverSide () {
      return store.state.serverSide
    },
    token () {
      return store.state.token
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
  onLoad ({id}) {
    store.commit('showLoading')
    const token = store.state.token
    this.id = id ? id : 25758

    // 获取产品信息
    wx.request({
      url: `${this.serverSide}/wxapi/product/prod_detail`,
      method: 'GET',
      data: {id},
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
    // 获取组合商品
    token && wx.request({
      url: `${this.serverSide}/wxapi/product/mProdInfo`,
      method: 'GET',
      data: {prod_id:id, token},
      header: {
        'Accept': 'application/json'
      },
      success: ({data, data: {status, data: {num, prod_info: {prod_image, prod_name}}}}) => {
        status && Object.assign(this, {total: num, prod_image, prod_name})
      }
    })
  },
  onShow () {
    wx.setNavigationBarTitle({
      title: '商品详情'
    })
  },
  methods: {
    setPhone (val) {
      this.phone = val
    },
    setAddress (val) {
      this.address = val
    },
    setRemark (val) {
      this.remark = val
    },
    onSubmit (type) {
      wx.request({
        url: `${serverSide}/wxapi/product/addQuoteApplyProd`,
        method: 'post',
        data: {
          prod_id: id,
          remark: type ? remark : address,
          customer_phone: phone,
          type,
          token
        },
        header: {'Accept': 'application/json'},
        success ({data: {status, info}}) {
          wx.showToast({
            title: info,
            icon: 'none',
            duration: 1000,
            success () {
              status === 1 && setTimeout(function(){
                wx.navigateBack({ changed: true });
              },2000);
            }
          })
        }
      })
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
