<template>
  <div class="title">
    <span class="line"></span>
    <span class="circle"></span>
    <span class="text">{{title}}</span>
    <span class="circle"></span>
    <span class="line"></span>
  </div>
</template>
<script>
  export default {
    props: ['title']
  }
</script>
<style scoped lang="less">
  .title {
    background: #fff;
    display: flex;
    justify-content:space-between;
    align-items: center;
    .circle{
      height: 5pt;
      width: 5pt;
      flex: 0 0 5pt;
      border:1pt solid #ccc;
      display:inline-block;
      border-radius: 50%;
    }
    .text{
      flex: 0 0 63pt;
      display:inline-block;
      font-size: 24rpx;
      text-align:center;
      color:#666;
    }
    .line{
      flex:1;
      display:inline-block;
      height: 1pt;
      background: #ccc;
    }

  }
</style>
