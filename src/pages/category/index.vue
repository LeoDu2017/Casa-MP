<template>
  <div class="category">
    <common-search :border="true"></common-search>
    <div class="categories_list">
      <cate-tab :list="category_titles"></cate-tab>
    </div>
    <tab-bar selected="2"></tab-bar>
  </div>
</template>
<script src="./index.js"></script>
<style scoped lang="less">
  .category{
    width: 100vw;
    height: 100vh;
    .categories_list{

    }
  }
</style>
