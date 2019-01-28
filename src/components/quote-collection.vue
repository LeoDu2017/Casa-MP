<template>
  <ul class="list">
    <quote-item
      v-bind="$attrs"
      v-on="$listeners"
      v-for="(item, index) in quotes"
      :key="index"
      :quote="item"
      :del="true"/>
  </ul>
</template>

<script>
  import QuoteItem from './units/model-nine.vue'
  export default {
    props: ['quotes'],
    components: {
      QuoteItem
    }
  }
</script>

<style scoped>
  .list{
    display: flex;
    flex-direction: column;
  }
</style>
