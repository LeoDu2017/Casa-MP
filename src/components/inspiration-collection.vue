<template>
  <ul class="list">
    <inspiration-item
      v-bind="$attrs"
      v-on="$listeners"
      v-for="(item, index) in inspirations"
      :key="index"
      :inspiration="item"
      :del="true"/>
  </ul>
</template>

<script>
  import InspirationItem from './units/model-seven.vue'
  export default {
    props: ['inspirations'],
    components: {
      InspirationItem
    }
  }
</script>

<style scoped>
  .list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
