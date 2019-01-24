import store from '@/status/store.js'
import inspirations from '@/components/inspiration-collection.vue'
import LoadingOver from '@/components/loading-over.vue'
import AccountTitle from '@/components/account-title.vue'
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
    inspirations,
    LoadingOver,
    AccountTitle
  },
  methods: {
    onAdd () {
      this.getInspiration(++this.page)
    },
    getInspiration (page) {
      const {serverSide, token} = this
      if (this.over) {
        return
      }
      wx.showLoading({ title: '加载中' })
      wx.request({
        url: `${serverSide}/wxapi/user/userCenterOriginality`,
        data: {page, token},
        success: ({data: {data: {list, total}, status}}) => {
          wx.hideLoading(list, total)
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
    onDelete (original_id) {
      const {token, serverSide} = this
      wx.request({
        url: `${serverSide}/wxapi/user/delProdCollect`,
        method: 'GET',
        data: {original_id, token},
        header: {'Accept': 'application/json'},
        success: ({data: {status}}) => {
          status && void (this.total--,
            this.list.splice(this.list.findIndex(item => item.original_id === original_id), 1))
          wx.showToast({
            title: status ? '灵感收藏删除成功' : '灵感收藏删除失败，请重试',
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
    this.getInspiration(0)
  }
}
