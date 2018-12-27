import SearchInput from '@/components/units/search-input.vue'
export default{
  data () {
    return {
      searchData: null
    }
  },
  components: {
    SearchInput
  },
  methods: {
    searchCallBack (searchData) {
      console.log(searchData)
      this.searchData = searchData
    }
  },
  onShow () { // 小程序 hook
    wx.setNavigationBarTitle({
      title: '搜索'
    })
  }
}
