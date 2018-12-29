<template>
  <header>
    <span class="en-title">{{en}}</span>
    <span class="cn-title">{{cn}}</span>
  </header>
</template>
<script>
  export default {
    props: ['en', 'cn']
  }
</script>
<style scoped lang="less">
  header{
    display: flex;
    flex-direction: column;
    padding:15pt;
    border-top:1px solid #e6e6e6;
    .en-title{
      font-size:36rpx;
      line-height:40rpx;
      color:#999999;
      margin-bottom: 15rpx;
    }
    .cn-title{
      font-size:48rpx;
      line-height:52rpx;
      color:#666666;
    }
  }
</style>
