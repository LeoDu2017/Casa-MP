<template>
  <div class="filter">
    <b-tab></b-tab>
    <b-panel
      v-on="$listeners"
      v-bind="$attrs"
      :B="classBList"
      :C="classCList">
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
      FS: {
        handler (val, oldVal) {
          console.log('B-panel', val)
          Object.assign(this, val)
        },
        deep: true
      }
    },
    props: ['FS']
  }
</script>

<style scoped lang="less">
  .filter{
    width: 100vw;
    height: 40px;
    position: relative;
  }
</style>
