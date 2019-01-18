import CommonSearch from '@/components/common-search'
import BrandFilter from '@/components/brand-filter'
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
      filter: null,
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
    productShowcase
  },
  onLoad ({id}) {
    id ? this.getBrand(id) : this.getBrandList()
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
      Object.assign(this, {uclass: class_url_name, uzone: cty_name_ab, ubrand: class_seo_name})
      this.getBrandList()
    },
    getBrandList () {
      const {serverSide, ubrand, uzone, uclass} = this
      wx.request({
        url: `${serverSide}/wxapi/brand/getBrandList`,
        data: { ubrand, uzone, uclass},
        success: ({data: {data: {brandList: {data}, ...filter}}}) => {
          wx.hideLoading()
          Object.assign(this, {filter, list: data})
        }
      })
    },
    getBrand (id,search) {
      const {serverSide} = this
      wx.request({
        url:`${serverSide}/wxapi/brand/getBrandDetail`,
        data: { ubrand: id, words: search},
        success: ({data: {data: {prod_list: {data}, info, ...pFilter}}}) => {
          Object.assign(this, {prodList: data, info, ...pFilter})
          // cyl.setData({
          //      brandclass:res.data.data.classBList,
          //        branduse:res.data.data.classCList,
          //   brandallinfo: res.data.data.info,
          //      brandtitle:res.data.data.info.brand_en_name

          //   brandlist:res.data.data.prod_list.data,

          // })
          // WxParse.wxParse('detail', 'html', cyl.data.brandallinfo.brand_detail, cyl, 5)
          // var brandtitle = cyl.data.brandtitle;
          // wx.setNavigationBarTitle({
          //   title: brandtitle
          // })
        }
      })
    }
  }
}
