<template>
  <li class="categoryItem" :class="'c-' + index">
    <div class="imageBox">
      <img :src="category.image_path"/>
    </div>
    <div class="_bottom">
      {{category.image_head}}
    </div>
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
    ._bottom{
      position:absolute;
      bottom:0;
      left:0;
      right:0;
      z-index:1;
      background:rgba(0,0,0,.5);
      color:#fff;
      text-align: center;
      height: 25pt;
      line-height: 25pt;
      font-size: 30rpx;
    }
    &.c-0,
    &.c-1{
      width: calc(50% - 2.5pt);
      margin-bottom: 5pt;
      .imageBox{
        width: 100%;
        height:113pt;
        img{
          height:100%;
          width: 100%;
        }
      }
    }
    &.c-2,
    &.c-3,
    &.c-4{
      width: calc(33.333333% - 3.333333pt);
      .imageBox{
        width: 100%;
        height: 75pt;
        img{
          height:100%;
          width: 100%;
        }
      }
    }

  }
</style>
