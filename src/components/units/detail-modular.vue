<template>
  <block>
    <div v-for="(item,index) in modular" :key="index" :id="'detail_'+index">
      <modular-title :title="item.mod_name"></modular-title>
      <!--<template is="wxParse" data="{{wxParseData:details[index].nodes}}"></template>-->
    </div>
  </block>
</template>

<script>
  import ModularTitle from './modular-title'

  export default {
    props: ['modular'],
    components: {
      ModularTitle
    }
  }
</script>

<style scoped>

</style>
