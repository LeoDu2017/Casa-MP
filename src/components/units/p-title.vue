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
      height: 5px;
      width: 5px;
      flex: 0 0 5px;
      border: 1px solid #ccc;
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
