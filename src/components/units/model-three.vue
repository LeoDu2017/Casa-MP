<template>
  <li class="brand">
    <div class="imageBox">
      <img :src="brand.image_path"/>
    </div>
    <div class="_bottom">
      <img :src="brand.brand_logo"/>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['brand']
  }
</script>

<style scoped lang="less">
  .brand{
    width:calc(50% - 2.5pt);
    margin-bottom: 5pt;
    position:relative;
    .imageBox{
      width:100%;
      height: 113pt;
      img{
        height:100%;
        width: 100%;
      }
    }
    ._bottom{
      width: 68pt;
      height: 45pt;
      position:absolute;
      bottom: 1pt;
      left: 50%;
      transform: translateX(-50%);
      z-index:10;
      img{
        height:100%;
        width: 100%;
      }
    }
  }
</style>
