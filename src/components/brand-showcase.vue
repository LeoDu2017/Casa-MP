<template>
  <ul class="list">
    <brand-case v-for="(item, index) in brands" :brand="item" :key="index" />
  </ul>
</template>

<script>
  import BrandCase from './units/model-five'
  export default {
    props: ['brands'],
    components: {
      BrandCase
    }
  }
</script>

<style scoped lang="less">
  .list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 15px;
  }
</style>
