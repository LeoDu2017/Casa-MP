<template>
  <div class="common_detail_title">
    <div class="line"></div>
    <div class="circle"></div>
    <div class="text">{{title}}</div>
    <div class="circle"></div>
    <div class="line"></div>
  </div>
</template>
<script>
  export default {
    props: ['title']
  }
</script>
<style scoped lang="less">
  .common_detail_title{
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin: 15px 0;
    .circle{
      height: 5px;
      width: 5px;
      flex: 0 0 5px;
      border:1px solid #ccc;
      display:inline-block;
      border-radius: 50%;
    }
    .text{
      flex: 0 0 63px;
      display:inline-block;
      font-size: 12px;
      text-align:center;
      color:#666;
    }
    .line{
      flex:1;
      display:inline-block;
      height: 1px;
      background: #ccc;
    }
  }
</style>
