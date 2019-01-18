import CommonSearch from '@/components/common-search'
import BrandFilter from '@/components/brand-filter'
import BrandShowcase from '@/components/brand-showcase'
import store from '@/status/store'
import TabBar from '@/components/common-tabBar.vue'

export default {
  data () {
    return {
      current_page: 0,
      ubrand: null,
      uzone: null,
      uclass: null,
      list: null,
      filter: null
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
    BrandShowcase
  },
  onLoad () {
    const {serverSide} = this
    wx.request({
      url: `${serverSide}/wxapi/brand/getBrandList`,
      success: ({data: {data: {brandList, ...filter}}}) => {
        Object.assign(this, {filter, list: brandList.data})
      }
    });
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
      const {serverSide} = this
      wx.showLoading({
        title: '加载中',
      })
      Object.assign(this, {uclass: class_url_name, uzone: cty_name_ab, ubrand: class_seo_name})
      const {ubrand, uzone, uclass} = this
      wx.request({
        url: `${serverSide}/wxapi/brand/getBrandList`,
        data: { ubrand, uzone, uclass},
        success: ({data: {data: {brandList: {data}, ...filter}}}) => {
          wx.hideLoading()
          Object.assign(this, {filter, list: data})
        }
      })
    }
  }
}
