<template>
  <div class="product_detail">
    <common-loading></common-loading>
    <common-banner :banner="gallery"  form="number"></common-banner>
    <product-info
      :id="id"
      :is_spots="is_spots"
      :activity="activity"
      :is_activity="is_activity"
      :act_attr="act_attr"
      :attr="attr"
      :subtitle="subtitle"
      :prod_name="prod_name"
      :origin="origin"
      :price="price"
      :sale_price="sale_price"
      :pro_style="style">
    </product-info>
    <common-division height="15"></common-division>
    <product-recommend
      title="设计师推荐组合，搭配首选"
      v-if="com_prod"
      :more="com_prod"
      :products="com_prod">
    </product-recommend>
    <common-division v-if="com_prod" height="15"></common-division>
    <product-details :modular="modular" :article="article"></product-details>
    <!--<common-division height="15"></common-division>-->
  </div>
</template>
<script src="./index.js"></script>
