<template>
  <ul class="_list">
    <p-item v-for="(item, index) in ids" :key="index" :prod_id="item" />
  </ul>
</template>

<script>
  import PItem from './units/p-item'
  export default {
    props: ['ids'],
    components: {
      PItem
    }
  }
</script>

<style scoped lang="less">
  ._list {

  }
</style>
