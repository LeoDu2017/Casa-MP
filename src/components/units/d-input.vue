<template>
  <div class="input" :style="{height: height + 'px'}">
    <i class="iconfont" :class="icon"></i>
    <textarea :placeholder="placeholder" :maxlength="maxlength"></textarea>
  </div>
</template>
<script>
  export default{
    props: ['icon', 'placeholder', 'height', 'maxlength']
  }
</script>
<style scoped lang="less">
  .input{
    width: 100%;
    border: 1px solid #999999;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 9px  11px;
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
    .iconfont{
      font-size: 18px;
      flex: 0 0 18px;
      color: #666;
      padding-right: 14px;
    }
    textarea{
      height: 100%!important;
      font-size: 14px;
      line-height: 16px!important;
    }
  }
</style>
