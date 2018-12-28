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
    margin: 30rpx 0;
    .circle{
      height: 10rpx;
      width: 10rpx;
      flex: 0 0 10rpx;
      border:2rpx solid #ccc;
      display:inline-block;
      border-radius: 50%;
    }
    .text{
      flex: 0 0 126rpx;
      display:inline-block;
      font-size: 24rpx;
      text-align:center;
      color:#666;
    }
    .line{
      flex:1;
      display:inline-block;
      height: 2rpx;
      background: #ccc;
    }
  }
</style>
