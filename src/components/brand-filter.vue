<template>
  <div class="filter">
    <f-tab :type="0"></f-tab>
    <f-pane
      v-bind="$attrs"
      v-on="$listeners"
      :type="0"
      :filters="filter">
    </f-pane>
  </div>
</template>

<script>
  import FTab from './units/f-tab.vue'
  import FPane from './units/f-panel.vue'
  export default {
    components: {
      FTab,
      FPane
    },
    props: ['filter']
  }
</script>

<style scoped lang="less">

</style>
