import CommonSearch from '@/components/common-search'
import productShowcase from '@/components/product-showcase'
import productFilter from '@/components/product-filter'
import store from '@/status/store'

export default {
  data () {
    return {
      uclassb: null,
      words: null,
      uclassc: null,
      prod_list: [],
      origins: null,
      current_page: 0,
      isload: true,
      filters: null,
      origin: null
    }
  },
  computed: {
    serverSide () {
      return store.state.serverSide
    }
  },
  components: {
    CommonSearch,
    productShowcase,
    productFilter
  },
  methods: {
    onAdd () {
      const {isload, serverSide, brand, uclassc, origin, uclassb, current_page} = this
      if(isload === true){
        wx.showLoading({
          title: '加载中',
        })
        wx.request({
          url:`${serverSide}/wxapi/product/getProdByPage`,
          data: { brand, uclassc, origin, uclassb, page: current_page + 1 },
          success: ({data: {status, data: {data}}}) => {
            if(status) {
              this.prod_list.push(...data)
              wx.hideLoading()
            }else{
              this.bottom_show = "没有更多产品"
              this.isload = false
              wx.hideLoading()
            }
          }
        })
      }
    },
    onFilter ({class_seo_name = this.uclassc, brand_url_name = this.brand, cty_name_ab = this.origin}) {
      Object.assign(this, {brand: brand_url_name, uclassc: class_seo_name, origin: cty_name_ab})
      const {brand, uclassc, origin, uclassb} = this
      wx.request({
        url: `${this.serverSide}/wxapi/product/getProdByClass`,
        data: {brand, uclassc, origin, uclassb},
        success: ({data: {data: {list, prod_list: {data}}}}) => {
          Object.assign(this, {prod_list: data, filters: list})
        }
      });
    }
  },
  onLoad ({uclassb, words, uclassc}) {
    Object.assign(this, {uclassb, words, uclassc})
    const {serverSide} = this
    wx.request({
      url:`${serverSide}/wxapi/product/getProdByClass`,
      data: { uclassb, words, uclassc},
      success: ({data: {data: {list, prod_list, list: {brand_list: {class_b: {class_name}}}}}}) => {
        const {data, ...rest} = prod_list
        Object.assign(this, {filters: list,prod_list:data, ...rest})
        wx.setNavigationBarTitle({
          title: class_name
        })
      }
    });
  }
}
