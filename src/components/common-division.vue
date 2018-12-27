<template>
  <scroll-view class="scroll-view_x" scroll-x style="width: auto;overflow:hidden;">
    <a class="item_list" v-for="(item,index) in spaces" :key="index" :href="'/pages/space/space?id='+item.space_url_name">
      {{item.space_name}}
    </a>
  </scroll-view>
</template>

<script>
  export default {
    name: 'home-spaces',
    props: ['spaces']
  }
</script>

<style scoped lang="less">

</style>
