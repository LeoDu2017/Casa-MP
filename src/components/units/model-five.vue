<template>
  <li class="brand">
    <a :url="'detail/main?brand_url_name='+brand.brand_url_name">
      <div class="img_wrap">
        <img :src="brand.brand_logo" />
      </div>
      <div class="_bottom">
        {{brand.brand_en_name}}
      </div>
    </a>
  </li>
</template>

<script>
  export default {
    props: ['brand']
  }
</script>

<style scoped lang="less">
  .brand{
    width: calc(50% - 5px);
    a{
      display: block;
      .img_wrap{
        height:113px;
        width:100%;
        img{
          height:100%;
          width:100%;
          border:1px solid #ccc;
        }
      }
      ._bottom{
        padding:10px 0;
        font-size: 14px;
        color:#333;
      }
    }
  }
</style>
