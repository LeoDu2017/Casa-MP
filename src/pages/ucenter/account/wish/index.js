import store from '@/status/store.js'
import products from '@/components/wish-collection.vue'
import LoadingOver from '@/components/loading-over.vue'
import AccountTitle from '@/components/account-title.vue'
export default {
  data () {
    return {
      total: 0,
      list: [],
      page: 0, // 加载完成
      over: false,
      ids: [], // 选中的商品
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
    LoadingOver,
    AccountTitle
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
        url: `${serverSide}/wxapi/user/userCenterWish`,
        data: {page, token},
        success: ({data: {data: {list, total}, status}}) => {
          wx.hideLoading()
          status ? void (
            this.total = total,
              page ?  this.list.push(...list) : void(this.list = list)
          ) : void (this.over = true)
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
        url: `${serverSide}/wxapi/user/delWith`,
        method: 'GET',
        data: {prod_id, token},
        header: {'Accept': 'application/json'},
        success: ({data: {status}}) => {
          status && void (this.total--,
            this.list.splice(this.list.findIndex(item => item.prod_id === prod_id), 1))
          wx.showToast({
            title: status ? '心愿收藏删除成功' : '心愿收藏删除失败，请重试',
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
    },
    onApply () {
      const {ids} = this
      ids.length
        ? wx.navigateTo({
          url: `/pages/product/detail/offerOrder/main?id=${ids}`
        })
        : wx.showToast({
          title: '请勾选需报价产品',
          icon: 'none'
        })
    },
    onChange ({target: {value}}) {
      this.ids = value
    }
  },
  onLoad () {
    this.getProduct(0)
  }
}
