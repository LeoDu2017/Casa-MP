import CommonSearch from '@/components/common-search'
import TabBar from '@/components/common-tabBar.vue'
import CateTab from '@/components/cate-tabs.vue'
import store from '@/status/store'

export default {
  data () {
    return {
      categories: null,
      category_titles: null,
      sub_categories: null
    }
  },
  components: {
    CommonSearch,
    TabBar,
    CateTab
  },
  computed: {
    serverSide () {
      return store.state.serverSide
    }
  },
  onShow () {
    const {serverSide} = this
    wx.request({
      url: `${serverSide}/wxapi/index/prod_class`,
      success:({data: {status, data}}) => {
        let category_titles = data.map(item => item.class_name)
        let sub_categories = data.map(item => item.son)
        console.log(sub_categories)
        // categories
        status && Object.assign(this, category_titles, sub_categories)
        console.log(this)
      },
      fail () {
        wx.showToast({
          title: '网络链接失败，请检查网络链接',
          icon: 'none'
        })
      }
    });
  }
}
