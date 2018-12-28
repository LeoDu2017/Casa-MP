<template>
  <div class="detailBox">
    <tab-bar :modular="modular" :len="len"></tab-bar>
    <scroll-div
      bindscroll="scroll"
      scroll-with-animation="true"
      scroll-y
      scroll-into-div="current_tab"
      class="detail_wrap">
      <detail-modular :modular="modular" v-if="modular.length"></detail-modular>
      <detail-artical :len="modular.len" :article="article" v-if="len"></detail-artical>
    </scroll-div>
  </div>
</template>
<script>
  import TabBar from './units/detail-tab'
  import DetailModular from './units/detail-modular'
  import DetailArtical from './units/detail-artical'

  export default {
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
    }
  }
</script>
<style scoped lang="less">
  .detailBox{
    padding:24rpx 30rpx;
    width: 100vw;
    box-sizing: border-box;
    overflow: hidden;
  }
</style>
