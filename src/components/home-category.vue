<template>
  <div class="category">
    <common-title :title="title" :more="more"></common-title>
    <ul class="categoryBox">
      <category-item v-for="(item,index) in categories" :key="index" :category="item" :index="index"></category-item>
    </ul>
  </div>
</template>

<script>
  import CommonTitle from './units/c-title.vue'
  import CategoryItem from './units/model-two.vue'
  export default {
    name: 'category',
    props: ['title', 'categories', 'more'],
    components: {
      CommonTitle,
      CategoryItem
    }
  }
</script>

<style scoped lang="less">
  .category{
    background: #fff;
    padding: 15px;
    width: 100vw;
    box-sizing: border-box;
    .categoryBox{
      padding-top:15px;
      display:flex;
      flex-wrap:wrap;
      justify-content: space-between;
    }
  }
</style>
