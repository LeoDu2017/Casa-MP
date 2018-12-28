<template>
  <block>
    <div v-for="(item,index) in modular" :key="index" :id="'detail_'+index">
      <modular-title :title="item.mod_name" />
      <wxParse :content="item.pro_detail" />
    </div>
  </block>
</template>

<script>
  import wxParse from 'mpvue-wxparse'
  import ModularTitle from './modular-title'

  export default {
    props: ['modular'],
    components: {
      ModularTitle,
      wxParse
    }
  }
</script>
<style scoped>
  @import url("~mpvue-wxparse/src/wxParse.css");
</style>
