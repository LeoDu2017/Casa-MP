import CommonSearch from '@/components/common-search'
import productShowcase from '@/components/product-showcase'
import store from '@/status/store'

export default {
  data () {
    return {
      uclassb: null,
      words: null,
      uclassc: null,
      prod_list: [],
      category: null,
      origins: null,
      origin: null,
      brand_list: null,
      current_page: 0,
      isload: true
    }
  },
  computed: {
    serverSide () {
      return store.state.serverSide
    }
  },
  components: {
    CommonSearch,
    productShowcase
  },
  onLoad ({uclassb, words, uclassc, type}) {
    Object.assign(this, {uclassb, words, uclassc})
    const {serverSide} = this
    wx.request({
      url:`${serverSide}/wxapi/product/getProdByClass`,
      data: { uclassb, words, uclassc},
      success: ({data: {data: {list, prod_list, list: {brand_list: {class_b: {class_name}}}}}}) => {
        const {data, ...rest} = prod_list
        const {origin, ...other} = list
        Object.assign(this, {origins:origin, ...other}, {prod_list:data, ...rest})
        wx.setNavigationBarTitle({
          title: class_name
        })
      }
    });
  },
  onReachBottom () {
    const {isload, serverSide, brand, uclassc, origin, uclassb, current_page} = this
    if(isload === true){
      wx.showLoading({
        title: '加载中',
      })
      wx.request({
        url:`${serverSide}/wxapi/product/getProdByPage`,
        data: { brand, uclassc, origin, uclassb, page: current_page + 1 },
        success: ({data: {status, data: {data}}}) => {
          console.log(65,data)
          if(status) {
            this.prod_list.push(...data)
            wx.hideLoading()
          }else{
            this.bottom_show = "没有更多产品",
            this.isload = false
            wx.hideLoading()
          }
        }
      })
    }else{
      return false;
    }
  }
}
