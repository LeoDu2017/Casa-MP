<template>
  <div class="inspiration">
    <common-search :border="1"></common-search>
    <inspiration-filter :filters="filters" @filter="onFilter"></inspiration-filter>
    <scroll-view
      scroll-y
      class="wrap"
      @scrolltolower="onAdd"
      :scroll-with-animation="true">
      <inspiration-list
        :inspirations="list"
        @collect="onCollect">
      </inspiration-list>
      <loading-over v-if="over">
      </loading-over>
    </scroll-view>
  </div>
</template>

<script>
  import store from '@/status/store'
  import CommonSearch from '@/components/common-search'
  import InspirationFilter from '@/components/inspiration-filter'
  import InspirationList from '@/components/inspiration-list'
  import LoadingOver from '@/components/loading-over'
  export default {
    data () {
      return {
        style: '',
        color: '',
        page: 1,
        list: [],
        filters: null,
        over: 0
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
      InspirationFilter,
      InspirationList,
      CommonSearch,
      LoadingOver
    },
    methods: {
      getList () {
        const {serverSide, token, style, color, page} = this
        wx.request({
          url: `${serverSide}/wxapi/originality/prodOriginalityList`,
          data: {page, token, style, color},
          success: ({data: {data: {list, ...filters}, status}}) => {
            status && Object.assign(this, {list, filters})
          },
          fail () {
            wx.showToast({
              title: '数据请求失败，请检查网络链接',
              icon: 'none'
            })
          }
        })
      },
      onAdd () {
        const {serverSide, token, style, color, over} = this
        !over && void (wx.showLoading({
          title: '加载中...'
        }), wx.request({
          url: `${serverSide}/wxapi/originality/ajaxProdOriginalityList`,
          data: {page: this.page++, token, style, color},
          success: ({data: {data, status}}) => {
            wx.hideLoading()
            status ? this.list.push(...data) : void (this.over = 1)
          },
          fail () {
            wx.showToast({
              title: '数据请求失败，请检查网络链接',
              icon: 'none'
            })
          }
        }))
      },
      onCollect (id, type) {
        const {token, serverSide, list} = this
        console.log(type)
        const url = type
          ? `${serverSide}/wxapi/originality/delOriginalCollect`
          : `${serverSide}/wxapi/originality/collectOriginalById`
        !token
          ? wx.navigateTo({url: '/pages/ucenter/login/main'})
          : wx.request({
            url,
            data: {id, token},
            success: ({data: {status, msg}}) => {
              const index = list.findIndex(item => item.id === id)
              status && void (list[index].is_collect = type ? 0 : 1)
              wx.showToast({
                title: msg,
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
      onFilter (res) {
        Object.assign(this, res)
        this.getList()
      }
    },
    onLoad () {
      this.getList()
    }
  }
</script>

<style scoped lang="less">
  .inspiration{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    .wrap{
      width: 100%;
      height: calc(100vh - 40px);
    }
  }
</style>
