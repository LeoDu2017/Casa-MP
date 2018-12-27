<template>
  <div class="sloganBox">
    <span class="_line"></span>
    <span class="_text">{{title}}</span>
    <span class="_line"></span>
  </div>
</template>
<script>
  export default {
    props: ['title']
  }
</script>
<style scoped lang="less">
  .sloganBox{
    width:100%;
    height:43pt;
    display: flex;
    line-height: 43pt;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;
    ._text{
      color: #212224;
      font-size: 42rpx;
      display: inline-block;
      padding: 0 6pt;
    }
    ._line{
      display: inline-block;
      height: 2pt;
      width: 20pt;
      background:#999999;
    }
  }
</style>
