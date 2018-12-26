<template>
  <h1 class="common-title" :style="{height:height + 'rpx'}">
    <span class="title" :style="{fontSize:height + 'rpx',height:height + 'rpx',lineHeight:height + 'rpx'}">{{ title }}</span>
    <span class="more" v-show="more" :style="{fontSize:(height - 10) + 'rpx'}">
      更多 <i class="iconfont icon-return" :style="{fontSize:height + 'rpx'}"></i>
    </span>
  </h1>
</template>
<script>
  export default {
    props: ['title', 'more', 'height']
  }
</script>
<style scoped lang="less">
  .common-title {
    display: flex;
    justify-content:space-between;
    align-items:center;
    .title{
      color: #333;
      padding-left: 7pt;
      border-left: 3pt solid #212224;
      display: flex;
    }
    .more{
      color: #666;
      .iconfont{
        display: inline;
      }
    }
  }
</style>

