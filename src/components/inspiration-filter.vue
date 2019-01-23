<template>
  <div class="filter">
    <i-tab></i-tab>
    <i-pane
      v-bind="$attrs"
      v-on="$listeners"
      :filters="filters">
    </i-pane>
  </div>
</template>

<script>
  import ITab from './units/i-tab.vue'
  import IPane from './units/i-panel.vue'
  export default {
    components: {ITab, IPane},
    props: ['filters']
  }
</script>

<style scoped lang="less">
  .filter{
    width: 100vw;
    height: 40px;
    position: relative;
  }
</style>
