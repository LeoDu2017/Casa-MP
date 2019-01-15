<template>
  <div class="category">
    <common-loading></common-loading>
    <common-search :border="true"></common-search>
    <div class="categories_list">
      <cate-tab
        @callBack="selectCategory"
        :list="category_titles"
        :selected="selected">
      </cate-tab>
      <cate-contents
        :current_cate="current_cate"
        @scroll="contentScroll"
        :list="sub_categories">
      </cate-contents>
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
      width: 100vw;
      height: calc(100vh - 105px);
      display: flex;
    }
  }
</style>
