import CommonSearch from '@/components/common-search'
import CommonLoading from '@/components/common-loading'
import BrandFilter from '@/components/brand-filter'
import BrandProductFilter from '@/components/brand-product-filter'
import BrandShowcase from '@/components/brand-showcase'
import store from '@/status/store'
import TabBar from '@/components/common-tabBar.vue'
import BrandInfo from '@/components/brand-info.vue'
import productShowcase from '@/components/product-showcase'

export default {
  data () {
    return {
      current_page: 0,
      ubrand: null,
      uzone: null,
      uclass: null,
      list: null,
      filters: null,
      pFilter: null,
      prodList: null,
      info: null
    }
  },
  computed: {
    serverSide () {
      return store.state.serverSide
    }
  },
  components: {
    CommonSearch,
    BrandFilter,
    TabBar,
    BrandShowcase,
    BrandInfo,
    productShowcase,
    BrandProductFilter,
    CommonLoading
  },
  onLoad () {
    store.commit('showLoading')
    Object.assign(this, {
      ubrand: null,
      uzone: null,
      uclass: null
    })
    this.getBrandList(null)
  },
  methods: {
    onAdd () {
      const {serverSide, ubrand, uzone, uclass, current_page} = this
      wx.showLoading({
        title: '加载中',
      })
      wx.request({
        url:`${serverSide}/wxapi/brand/ajaxBrandMore`,
        data: { ubrand, uzone, uclass, page: current_page + 1 },
        success: ({data: {status, data: {data}}}) => {
          if(status) {
            this.list.push(...data)
            wx.hideLoading()
          }else{
            wx.hideLoading()
          }
        }
      })
    },
    onFilter ({class_url_name = this.uclass, cty_name_ab = this.uzone, class_seo_name = this.ubrand}) {

      wx.showLoading({
        title: '加载中',
      })
      const data = {uclass: class_url_name, uzone: cty_name_ab, ubrand: class_seo_name}
      Object.assign(this, data)
      this.getBrandList(data)
    },
    onPFilter (res) {
      wx.showLoading({
        title: '加载中',
      })
      Object.assign(this, {})
      this.getBrandList(data)
    },
    getBrandList (data) {
      const {serverSide} = this
      wx.request({
        url: `${serverSide}/wxapi/brand/getBrandList`,
        data,
        success: ({data: {data: {brandList: {data}, ...filters}}}) => {
         setTimeout(() => {
           store.commit('hideLoading')
         }, 4500)
          wx.hideLoading()
          Object.assign(this, {filters, list: data})
        }
      })
    }
  }
}
