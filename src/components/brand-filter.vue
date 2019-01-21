<template>
  <div class="filter">
    <c-tab></c-tab>
    <c-panel
      v-on="$listeners"
      v-bind="$attrs"
      :filters="filters">
    </c-panel>
  </div>
</template>

<script>
  import CTab from './units/c-tab.vue'
  import CPanel from './units/c-panel.vue'
  export default {
    components: {CTab, CPanel},
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
