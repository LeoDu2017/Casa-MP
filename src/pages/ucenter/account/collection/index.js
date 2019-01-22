import store from '@/status/store.js'
import products from '@/components/product-collection.vue'
import CommonDivision from '@/components/common-division.vue'
export default {
  data () {
    return {
      total: 0,
      list: [],
      page: 0, // 加载完成
      over: false
    }
  },
  computed: {
    serverSide () {
      return store.state.serverSide
    },
    token () {
      return store.state.token
    }
  },
  components: {
    products,
    CommonDivision
  },
  methods: {
    onAdd () {
      this.getProduct(++this.page)
    },
    getProduct (page) {
      const {serverSide, token} = this
      if (this.over) {
        return
      }
      wx.showLoading({ title: '加载中' })
      wx.request({
        url: `${serverSide}/wxapi/user/getCollectionList`,
        data: {page, token},
        success: ({data: {data: {list, total}, status}}) => {
          wx.hideLoading()
          status ? void (this.total = total, this.list.push(...list)) : void (this.over = true)
        },
        fail () {
          wx.hideLoading()
          wx.showToast({
            title: '数据请求失败，请检查网络链接',
            icon: 'none'
          })
        }
      })
    },
    onDelete (prod_id) {
      const {token, serverSide} = this
      wx.request({
        url: `${serverSide}/wxapi/user/delProdCollect`,
        method: 'GET',
        data: {prod_id, token},
        header: {'Accept': 'application/json'},
        success: ({data: {status}}) => {
          status && void (this.total--,
            this.list.splice(this.list.findIndex(item => item.prod_id === prod_id), 1))
          wx.showToast({
            title: status ? '产品收藏删除成功' : '产品收藏删除失败，请重试',
            icon: 'none'
          })
        },
        fail () {
          wx.showToast({
            title: '数据请求失败，请检查网络链接',
            icon: 'none'
          })
        }
      })
    }
  },
  onLoad () {
    this.getProduct(0)
  }
}
