<template>
  <div class="detail">
    <div class="tabs">
      <common-search :border="true"></common-search>
      <brand-info :info="info"></brand-info>
    </div>
    <scroll-view
      @scrolltolower="onAddProduct"
      :scroll-with-animation="true"
      scroll-y
      class="product_wrap">
      <product-showcase :products="prodList"></product-showcase>
    </scroll-view>
  </div>
</template>

<script src="../index.js"></script>

<style scoped lang="less">
  .detail{
    width: 100vw;
    height: 100vh;
    .product_wrap{
      height: calc(100vh - 70px);
    }
  }
</style>
