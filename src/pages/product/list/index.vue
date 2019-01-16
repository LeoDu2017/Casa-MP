<template>
  <div class="detail">
    <div class="tabs">
      <common-search :border="true"></common-search>
      <product-filter :filters="filters" @filter="onFilter"></product-filter>
    </div>

    <scroll-view
      @scrolltolower="onAdd"
      :scroll-with-animation="true"
      scroll-y
      :scroll-into-view="current_tab"
      class="product_wrap">
      <product-showcase :products="prod_list"></product-showcase>
    </scroll-view>
  </div>
</template>

<script src="./index.js"></script>

<style scoped lang="less">
  .detail{
    .product_wrap{
      height: calc(100vh - 90px);
    }
  }
</style>
