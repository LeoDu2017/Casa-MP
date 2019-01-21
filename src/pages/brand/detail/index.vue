<template>
  <div class="detail">
    <div class="tabs">
      <common-search :border="true"></common-search>
      <brand-info :info="info"></brand-info>
      <brand-product-filter :FS="FS" @filter="onFilter"></brand-product-filter>
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

<script>
  import CommonSearch from '@/components/common-search'
  import BrandInfo from '@/components/brand-info.vue'
  import BrandProductFilter from '@/components/brand-product-filter'
  import store from '@/status/store'
  import productShowcase from '@/components/product-showcase'

  export default {
    data () {
      return {
        current_page: 0,
        ubrand: null,
        uzone: null,
        uclass: null,
        list: null,
        FS: null,
        prodList: null,
        info: null
      }
    },
    computed: {
      serverSide () {
        return store.state.serverSide
      }
    },
    components: {
      CommonSearch,
      BrandInfo,
      productShowcase,
      BrandProductFilter
    },
    onLoad ({id}) {
      const {serverSide} = this
      wx.request({
        url: `${serverSide}/wxapi/brand/getBrandDetail`,
        data: {ubrand: id},
        success: ({data: {data: {prod_list: {data}, info, classB, words, ...FS}}}) => {
          Object.assign(this, {prodList: data, info, FS})
        }
      })
    },
    methods: {
      onFilter () {
        console.log('filter')
      }
    }
  }
</script>

<style scoped lang="less">
  .detail{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    .product_wrap{
      height: calc(100vh - 120px);
    }
  }
</style>
