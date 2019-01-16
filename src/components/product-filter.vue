<template>
  <div class="filter">
    <f-tab
      @select="onSelect"
      :selected="selected"
      :class_name="class_name"
      :brand_title="brand_title"
      :country_title="country_title" />
    <f-panel
      @colse="onClose"
      @onchange="onChange"
      @filter="onFilter"
      :filters="filters"
      :selected="selected"></f-panel>

  </div>
</template>
<script>
  import FTab from './units/f-tab.vue'
  import FPanel from './units/f-panel.vue'
  export default {
    components: {FTab},
    data () {
      return {
        selected: -1,
        class_name: '功能',
        country_title: '国家',
        brand_title: '品牌'
      }
    },
    component: {
      FTab,
      FPanel
    },
    props: ['filters'],
    computed: {
      // categories () {
      //   console.log(this.filters)
      //   const {category, ...rest} = this.filters
      //   console.log(rest)
      //   return category
      // }
    },
    methods: {
      onSelect (index) {
        console.log(index)
        this.selected = index === this.selected ? -1 : index
      },
      onChange (current) {
        this.selected = current
      },
      onClose () {
        this.selected = -1
      },
      onFilter (brand, uclassc, origin, class_name) {
        this.class_name = class_name
        this.$emit('filter', brand, uclassc, origin)
      }
    }
  }
</script>
<style scoped lang="less">
  .filter{
    width: 100vw;
    height: 40px;
    position: relative;
  }
</style>
