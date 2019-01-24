<template>
  <div class="header">
    <span class="text">{{title}}收藏</span>
    <span class="text">共{{total}}件{{title}}</span>
  </div>
</template>

<script>
  export default {
    props: ['title', 'total']
  }
</script>

<style scoped lang="less">
  .header{
    height:50px;
    border-bottom:1px solid #e5e5e5;
    color:#4c4c4c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .text{
      font-size:14px;
    }
  }
</style>
