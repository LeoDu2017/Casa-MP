<template>
  <div class="article">
    <common-search></common-search>
    <scroll-view
      scroll-y
      class="wrap"
      @scrolltolower="onAdd"
      :scroll-with-animation="true">
      <aticles :list="article_list"></aticles>
      <loading-over v-if="over"></loading-over>
    </scroll-view>
  </div>
</template>

<script>
  import store from '@/status/store'
  import Aticles from '@/components/aticle-list'
  import CommonSearch from '@/components/common-search'
  export default {
    data () {
      return {
        current_page: 0,
        article_list: [],
        over: false
      }
    },
    components: {
      CommonSearch,
      Aticles
    },
    computed: {
      serverSide () {
        return store.state.serverSide
      }
    },
    onLoad ({class_id = 0}) {
      this.class_id = class_id
      const {serverSide} = this
      wx.request({
        url: `${serverSide}/wxapi/article/getArticleList`,
        data: { class: class_id },
        success: ({data: {data}}) => {
          Object.assign(this, data)
        }
      })
    },
    methods: {
      onAdd () {
        wx.showLoading({title: '加载中...'})
        const {serverSide, class_id, article_list} = this
        wx.request({
          url: `${serverSide}/wxapi/article/ajaxGetArticleList`,
          data: { class: class_id, page: this.current_page++ },
          success: ({data: {status, data: {data}}}) => {
            status ? article_list.push(...data) : void (this.over = true)
            wx.hideLoading()
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .article{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    .wrap{
      height: calc(100vh - 70px);
    }
  }
</style>
