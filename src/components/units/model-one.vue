<template>
  <li class="product">
    <a :href="'/pages/product/detail/main?id=' + id" >
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
    props: ['product', 'min'],
    computed: {
      id () {
        return this.product.prod_id || this.product.id
      }
    }
  }
</script>

<style scoped lang="less">
  .product{
    width: calc(50% - 2.5px);
    .img_wrap{
      height:113px;
      width:100%;
      img{
        height:100%;
        width:100%;
      }
    }
    ._bottom{
      padding:10px 0;
      p{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-all;
        font-size: 14px;
        color:#333;
        &.min{
          font-size: 12px;
          color:#666
        }
      }
    }
  }
</style>
