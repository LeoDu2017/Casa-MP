<template>
  <h1 class="common-title" :style="{height:height + 'px'}">
    <span class="title" :style="{fontSize:height + 'px',height:height + 'px',lineHeight:height + 'px'}">{{ title }}</span>
    <span class="more" v-show="more" :style="{fontSize:(height - 10) + 'px'}">
      <a :href="more">
        更多 <i class="iconfont icon-return" :style="{fontSize:height + 'px'}"></i>
      </a>
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
      padding-left: 7px;
      border-left: 3px solid #212224;
      display: flex;
    }
    .more{
      color: #666;
      font-size:  12px;
      .iconfont{
        display: inline;
        font-size:  12px;
      }
    }
  }
</style>

