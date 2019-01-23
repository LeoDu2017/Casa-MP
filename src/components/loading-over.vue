<template>
  <div>
    <common-division :height="3"></common-division>
    <div class="over">商品加载完毕！</div>
  </div>
</template>
<script>
  import CommonDivision from './common-division'
  export default {
    components: {
      CommonDivision
    }
  }
</script>
<style lang="less" scoped>
  .over{
    text-align: center;
    font-size: 14px;
    height: 100px;
    line-height: 60px;
    color: #666;
  }
</style>
