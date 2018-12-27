<template>
  <li class="product">
    <a :href="'/pages/product/main?id=' + product.prod_id" >
      <div class="img_wrap">
        <img :src="product.image_path" v-if="product.image_path"/>
        <img :src="product.prod_image" v-if="product.prod_image"/>
      </div>
      <div class="_bottom">
        <p v-if="product.image_head" :class="min ? 'min' : ''">{{ product.image_head }}</p>
        <p v-if="product.brand_en_name" :class="min ? 'min' : ''">{{ product.brand_en_name }}</p>
        <p v-if="product.prod_name" :class="min ? 'min' : ''">{{ product.prod_name }}</p>
      </div>
    </a>
  </li>
</template>

<script>
  export default {
    name: 'model-one',
    props: ['product', 'min']
    // computed: {
    //   image_head () {
    //     return this.product.hasOwnProperty('image_head') ? this.product.image_head : ''
    //   },
    //   brand_en_name () {
    //     return this.product.hasOwnProperty('brand_en_name') ? this.product.brand_en_name : ''
    //   },
    //   prod_name () {
    //     return this.product.hasOwnProperty('prod_name') ? this.product.prod_name : ''
    //   }
    // }
  }
</script>

<style scoped lang="less">
  .product{
    width: calc(50% - 2.5pt);
    .img_wrap{
      height:113pt;
      width:100%;
      img{
        height:100%;
        width:100%;
      }
    }
    ._bottom{
      padding:10pt 0;
      p{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-all;
        font-size: 30rpx;
        color:#333;
        &.min{
          font-size: 24rpx;
          color:#666
        }
      }
    }
  }
</style>
