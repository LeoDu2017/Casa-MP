<template>
  <div class="brand">
    <div class="tabs">
      <common-search :border="true"></common-search>
      <brand-filter></brand-filter>
    </div>
    <scroll-view
      @scrolltolower="onAdd"
      :scroll-with-animation="true"
      scroll-y
      class="brand_wrap">
      <brand-showcase :brands="list"></brand-showcase>
    </scroll-view>
    <tab-bar selected="3"></tab-bar>
  </div>
</template>
<script src="./index.js"></script>

<style scoped lang="less">
  .brand{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    .brand_wrap{
      width: 100%;
      height: calc(100vh - 150px);
    }
  }
</style>
