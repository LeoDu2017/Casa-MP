<template>
  <ul class="list">
      <product-item
        v-bind="$attrs"
        v-on="$listeners"
        v-for="(item, index) in products"
        :key="index"
        :product="item"
        :del="true"/>
  </ul>
</template>

<script>
  import ProductItem from './units/model-eight.vue'
  export default {
    props: ['products'],
    components: {
      ProductItem
    }
  }
</script>

<style scoped>
  .list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 20px;
  }
</style>
