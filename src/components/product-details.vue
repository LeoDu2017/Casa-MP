<template>
  <div class="detailBox">
    <tab-bar :modular="modular" :len="len" :current="current" @scrollTab="scrollTab" />
    <scroll-view
      @scroll="scroll"
      :scroll-with-animation="true"
      scroll-y
      :scroll-into-view="current_tab"
      class="detail_wrap">
      <detail-modular :modular="modular" v-if="modular.length"></detail-modular>
      <detail-artical :len="modular.len" :article="article" v-if="len"></detail-artical>
    </scroll-view>
  </div>
</template>
<script>
  import TabBar from './units/detail-tab'
  import DetailModular from './units/detail-modular'
  import DetailArtical from './units/detail-artical'

  export default {
    data () {
      return {
        scrollTop: 0,
        current_tab: 'detail_0',
        current: 0
      }
    },
    props: ['modular', 'article'],
    computed: {
      len () {
        return this.article ? this.article.length : 0
      }
    },
    components: {
      TabBar,
      DetailModular,
      DetailArtical
    },
    methods: {
      scroll (e) {
        // console.log(e)
        // this.scrollTop = e.detail.scrollTop
      },
      scrollTab (index, tab) {
        this.current = index
        this.current_tab = tab
      },
      scrolltolower (e) {
        console.log(e)
      }
    }
  }
</script>
<style scoped lang="less">
  .detailBox{
    padding: 12px 15px;
    width: 100vw;
    box-sizing: border-box;
    overflow: hidden;
    .detail_wrap{
      margin-top: 15px;
      height: 500px;
    }
  }
</style>
