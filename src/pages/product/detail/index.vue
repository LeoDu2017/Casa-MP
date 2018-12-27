<template>
  <div class="product_detail">
    <common-loading></common-loading>
    <common-banner :banner="gallery"  form="number"></common-banner>
    <product-info
      :is_spot="is_spot"
      :activity="activity"
      :is_activity="is_activity"
      :act_attr="act_attr"
      :attr="attr"
      :subtitle="subtitle"
      :prod_name="prod_name"
      :origin="origin"
      :pro_style="style">
    </product-info>
    <common-division height="15"></common-division>
  </div>
</template>
<script src="./index.js"></script>
<style scoped lang="less">
  .product_detail{

  }
</style>
