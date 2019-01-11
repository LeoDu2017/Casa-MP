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
      font-size: 18px;
      line-height: 20px;
      color:#999999;
      margin-bottom: 8px;
    }
    .cn-title{
      font-size: 24px;
      line-height: 26px;
      color:#666666;
    }
  }
</style>
