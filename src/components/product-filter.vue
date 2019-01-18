<template>
  <div class="filter">
    <f-tab :type="1"></f-tab>
    <f-pane
      v-bind="$attrs"
      v-on="$listeners"
      :filters="filters">
    </f-pane>
  </div>
</template>
<script>
  import FTab from './units/f-tab.vue'
  import FPane from './units/f-panel.vue'
  export default {
    components: {FTab, FPane},
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
