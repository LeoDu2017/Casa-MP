import store from '@/status/store.js'
import quotes from '@/components/quote-collection.vue'
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
    quotes,
    LoadingOver,
    AccountTitle
  },
  methods: {
    onAdd () {
      this.getQuote(++this.page)
    },
    getQuote (page) {
      const {serverSide, token} = this
      if (this.over) {
        return
      }
      wx.showLoading({ title: '加载中' })
      wx.request({
        url: `${serverSide}/wxapi/user/userOffer`,
        data: {page, token},
        success: ({data: {data: {list, total}, status}}) => {
          wx.hideLoading(list, total)
          status ? void (this.total = total,
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
    }
  },
  onLoad () {
    this.getQuote(0)
  }
}
