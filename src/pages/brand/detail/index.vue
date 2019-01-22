<template>
  <div class="detail">
    <div class="tabs">
      <common-search :border="true"></common-search>
      <brand-info :info="info"></brand-info>
      <brand-product-filter :filters="filters" @filter="onFilter"></brand-product-filter>
    </div>
    <scroll-view
      @scrolltolower="onAdd"
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
        ubrand: null,
        filters: null,
        prodList: null,
        info: null,
        classB: null,
        classC: null,
        currentPage: 0
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
      this.ubrand = id
      const {serverSide, ubrand} = this
      wx.request({
        url: `${serverSide}/wxapi/brand/getBrandDetail`,
        data: {ubrand},
        success: ({data: {data: {prod_list: {data}, info, classB, words, ...filters}}}) => {
          Object.assign(this, {prodList: data, info, filters})
        }
      })
    },
    methods: {
      onFilter ({classB = this.classB, classC = this.classC}) {
        Object.assign(this, {classB, classC})
        const {serverSide, ubrand} = this
        wx.request({
          url: `${serverSide}/wxapi/brand/getBrandDetail`,
          data: {ubrand, classB, classC},
          success: ({data: {data: {prod_list: {data}, info, ...filters}}}) => {
            Object.assign(this, {prodList: data, info, filters})
          }
        })
      },
      onAdd () {
        wx.showLoading({
          title: '加载中'
        })
        const {serverSide, ubrand, classB, classC, prodList} = this
        wx.request({
          url: `${serverSide}/wxapi/brand/ajaxProdListByBrand`,
          data: {ubrand, classB, classC, page: ++this.currentPage},
          success: ({data: {data}, status}) => {
            wx.hideLoading()
            status ? prodList.push(...data.data) : wx.showToast({
              title: '加载完毕',
              icon: 'none'
            })
          }
        })
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
