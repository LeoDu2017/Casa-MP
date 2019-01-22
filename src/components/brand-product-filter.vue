<template>
  <div class="filter">
    <b-tab></b-tab>
    <b-panel
      v-on="$listeners"
      v-bind="$attrs"
      :classBList="filters.classBList"
      :classCList="filters.classCList">
    </b-panel>
  </div>
</template>

<script>
  import BTab from './units/b-tab.vue'
  import BPanel from './units/b-panel.vue'
  export default {
    components: {BTab, BPanel},
    data () {
      return {
        selected: -1,
        classBList: null,
        classCList: null
      }
    },
    watch: {
      filters: {
        handler (val, oldVal) {
          console.log('B-panel', val)
          Object.assign(this, val)
        },
        deep: true
      }
    },
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
