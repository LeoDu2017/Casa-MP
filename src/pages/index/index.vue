<template>
  <div class="container">
    <common-loading></common-loading>
    <common-search></common-search>
    <home-spaces :spaces="spaces"></home-spaces>
    <common-banner :banner="banner" form="pointer"></common-banner>
    <home-slogan title="买进口家具 找有荣-意大利之家"></home-slogan>
    <home-promotion :promotion="promotion"></home-promotion>
    <common-division height="15"></common-division>
    <home-showcase title="精品推荐" :products="recommend"></home-showcase>
    <common-division height="15"></common-division>
    <home-category title="精选分类" :categories="prodlist" :more="prodlist"></home-category>
    <common-division height="15"></common-division>
    <home-brands title="精选品牌" :brands="brands" :more="brands"></home-brands>
    <common-division height="15"></common-division>
    <home-showcase title="猜你喜欢" :products="like" :more="like"></home-showcase>
    <common-division height="15"></common-division>
    <home-dash :dash="dash"></home-dash>
    <common-division height="64"></common-division>
    <tab-bar selected="1"></tab-bar>
  </div>
</template>

<script src="./index.js"></script>

