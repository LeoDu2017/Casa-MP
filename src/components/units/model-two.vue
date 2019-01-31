<template>
  <li class="categoryItem" :class="'c-' + index">
    <a :href="'/pages/product/list/main?uclassb='+category.class_seo_name+'&type=cate'">
      <div class="imageBox">
        <img :src="category.image_path"/>
      </div>
      <div class="_bottom">
        {{category.image_head}}
      </div>
    </a>
  </li>
</template>

<script>
  export default {
    props: ['category', 'index']
  }
</script>

<style scoped lang="less">
  .categoryItem{
    position:relative;
    a{
      display: block;
    }
    ._bottom{
      position:absolute;
      bottom:0;
      left:0;
      right:0;
      z-index:1;
      background:rgba(0,0,0,.5);
      color:#fff;
      text-align: center;
      height: 25px;
      line-height: 25px;
      font-size: 15px;
    }
    &.c-0,
    &.c-1{
      width: calc(50% - 2.5px);
      margin-bottom: 5px;
      .imageBox{
        width: 100%;
        height:113px;
        img{
          height:100%;
          width: 100%;
        }
      }
    }
    &.c-2,
    &.c-3,
    &.c-4{
      width: calc(33.333333% - 3.333333px);
      .imageBox{
        width: 100%;
        height: 75px;
        img{
          height:100%;
          width: 100%;
        }
      }
    }
  }
</style>
