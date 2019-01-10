<template>
  <div class="title">
    <h1>{{title}}</h1>
    <h2>{{subTitle}}</h2>
  </div>
</template>
<script>
  export default {
    props: ['title', 'subTitle']
  }
</script>
<style scoped lang="less">
  .title{
    margin-bottom: 20px;
    h1{
      height: 16px;
      line-height: 16px;
      font-size: 16px;
      color:#333;
      font-weight:bold;
      margin-bottom: 10px;
    }
    h2{
      color:#999;
      font-size: 12px;
      height: 12px;
      line-height: 12px;
    }
  }
</style>
