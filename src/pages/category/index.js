import CommonSearch from '@/components/common-search'
import CommonLoading from '@/components/common-loading'
import TabBar from '@/components/common-tabBar.vue'
import CateTab from '@/components/cate-tabs.vue'
import CateContents from '@/components/cate-contents.vue'
import store from '@/status/store'

export default {
  data () {
    return {
      selected: 0,
      categories: null,
      category_titles: null,
      sub_categories: null,
      current_cate: 'category0',
      category_detail_height: [],
      len: 0
    }
  },
  components: {
    CommonSearch,
    TabBar,
    CateTab,
    CateContents,
    CommonLoading
  },
  computed: {
    serverSide () {
      return store.state.serverSide
    }
  },
  onLoad () {
    store.commit('showLoading')
    const {serverSide} = this
    wx.request({
      url: `${serverSide}/wxapi/index/prod_class`,
      success:({data: {status, data}}) =>
        status && Object.assign(
        this,
        {len: data.length},
        {category_titles: data.map(item => item.class_name)},
        {sub_categories: data.map(item => {
            return {
              list: item.son,
              introduce: item.class_intro
            }
          })}
        ),
      fail () {
        wx.showToast({
          title: '网络链接失败，请检查网络链接',
          icon: 'none'
        })
      }
    })
  },
  methods: {
    selectCategory (index) {
      this.current_cate = `category${index}`
      this.selected = index
    },
    contentScroll (top) {
      const H = this.category_detail_height
      try {
        H.forEach((item,index) => {
          if (item < top  && top < H[index+1]) {
            this.selected = index+1
            this.current_cate = `category${index+1}`
            throw new Error("EndIterative");
          }else if(top < 50){
            this.selected = 0
            this.current_cate = 'category0'
            throw new Error("EndIterative");
          }
        })
      } catch(e) {
        if(e.message !== "EndIterative") throw e;
      }
    }
  },
  watch: {
    len () {

    }
  },
  onReady () {
    setTimeout(() => {
      store.commit('hideLoading')
      let query = wx.createSelectorQuery()
      for(let i = 0; i < this.len; i++){
        query.select('#category'+i).boundingClientRect(rect => {
          this.category_detail_height[i] = rect.top + 200
        }).exec()
      }
    }, 5000)
  }
}
