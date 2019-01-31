<template>
  <div class="container">
    <common-loading></common-loading>
    <common-search :border="false"></common-search>
    <home-spaces :spaces="spaces"></home-spaces>
    <scroll-view
      scroll-y
      class="wrap"
      @scrolltolower="onAdd"
      :scroll-with-animation="true">
      <common-banner :banner="banner" form="pointer"></common-banner>
      <home-slogan title="买进口家具 找有荣-意大利之家"></home-slogan>
      <home-promotion :promotion="promotion" v-if="promotion.goods.length"></home-promotion>
      <common-division height="15" v-if="promotion.goods.length"></common-division>
      <home-showcase title="精品推荐" :products="recommend"></home-showcase>
      <common-division height="15"></common-division>
      <home-category title="精选分类" :categories="prodlist" more="/pages/category/main"></home-category>
      <common-division height="15"></common-division>
      <home-brands title="精选品牌" :brands="brand" :more="brand"></home-brands>
      <common-division height="15"></common-division>
      <home-showcase title="猜你喜欢" :products="like" more="/pages/product/list/main?uclassb=furniture"></home-showcase>
      <common-division height="15"></common-division>
      <home-dash :a="a" :b="b" :c="c" :d="d"></home-dash>
    </scroll-view>
    <tab-bar selected="1"></tab-bar>
  </div>
</template>

<script src="./index.js"></script>

<style scoped>
  .wrap{
    height: calc(100vh - 117px);
  }
</style>

