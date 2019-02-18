<template>
  <div class="common-block">
    <common-title :title="title" :more="more" :height="32"></common-title>
    <ul class="product-wrap">
      <product-window v-for="product in products" :product="product" :key="product.id" :min="true">
      </product-window>
    </ul>
  </div>
</template>
<script>
  import CommonTitle from './units/c-title.vue'
  import ProductWindow from './units/model-one.vue'
  export default {
    props: ['title', 'products', 'more'],
    components: {
      CommonTitle,
      ProductWindow
    }
  }
</script>
<style scoped lang="less">
  .common-block{
    padding: 15px 15px 5px;
    background: #fff;
    .product-wrap{
      display:flex;
      padding-top:15px;
      flex-wrap:wrap;
      justify-content: space-between;
      overflow:hidden;
    }
  }
</style>
