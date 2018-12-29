<template>
  <label id="Input">
    <i class="iconfont" :class="icon"></i>
    <input :placeholder="placeholder" />
  </label>
</template>
<script>
  export default {
    props: ['icon', 'placeholder']
  }
</script>
<style scoped lang="less">
  #Input {
    display: flex;
    border-bottom: 1px solid #cccccc;
    height:54px;
    line-height:54px;
    align-items: center;
    font-size: 28rpx;
    .iconfont{
      margin-right: 12px;
    }
  }
</style>
