<template>
  <div class="showcase">
    <common-title :title="title" :more="more" v-if="title"></common-title>
    <ul class="product-wrap">
      <product-window v-for="product in products" :product="product" :key="product.id">
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
  .showcase {
    background: #fff;
    padding: 15px 15px 5px;
    .product-wrap{
      display:flex;
      flex-wrap:wrap;
      justify-content: space-between;
      overflow:hidden;
    }
  }
</style>
