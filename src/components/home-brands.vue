<template>
  <div class="brands">
    <common-title :title="title" :more="more"></common-title>
    <ul class="brandsBox">
      <brand-item v-for="brand in brands" :brand="brand" :key="brand.id"></brand-item>
    </ul>
  </div>
</template>

<script>
  import CommonTitle from './units/c-title.vue'
  import BrandItem from './units/model-three.vue'
  export default {
    props: ['title', 'more', 'brands'],
    components: {
      CommonTitle,
      BrandItem
    }
  }
</script>

<style scoped lang="less">
  .brands{
    padding: 15pt 15pt 10pt;
    background: #fff;
    width: 100vw;
    box-sizing: border-box;
    .brandsBox{
      padding-top: 15pt;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
</style>
