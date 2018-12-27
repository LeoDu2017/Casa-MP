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
  </div>
</template>

<script>
import store from '@/status/store'
import CommonSearch from '@/components/common-search'
import CommonLoading from '@/components/common-loading'
import CommonBanner from '@/components/common-banner'
import CommonDivision from '@/components/common-division'
import HomeSlogan from '@/components/home-slogan'
import HomePromotion from '@/components/home-promotion'
import HomeSpaces from '@/components/home-spaces'
import HomeShowcase from '@/components/home-showcase'
import HomeCategory from '@/components/home-category.vue'
import HomeBrands from '@/components/home-brands.vue'

export default {
  data () {
    return {
      show: true,
      banner: [],
      spaces: [],
      recommend: [],
      prodlist: [],
      brands: [],
      promotion: {
        title: '双十一活动精选',
        goods: []
      }
    }
  },

  components: {
    CommonSearch,
    CommonLoading,
    CommonBanner,
    HomeSlogan,
    HomePromotion,
    HomeSpaces,
    CommonDivision,
    HomeShowcase,
    HomeCategory,
    HomeBrands
  },

  methods: {
    menuToggle (toggle) {
      this.on = toggle
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  },

  onLoad () {
    store.commit('showLoading')
    wx.request({
      url: `${store.state.url}/wxapi/index/index`,
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: (res) => {
        setTimeout(() => { store.commit('hideLoading') }, 4500)
        const {spaces, banner, purchase, recommend, like, prodlist, brand} = res.data.data
        this.banner = banner
        this.spaces = spaces
        this.recommend = recommend
        this.prodlist = prodlist
        this.brands = brand
        this.promotion.goods = purchase
        console.log(spaces, banner, purchase, recommend, like, prodlist, brand)
        //
        // self.spaces = spaces;
        // self.banner = banner;
        // self.promotion.goods = purchase;
        // self.recommend = recommend;
        // self.like = like;
        // self.prodlist = prodlist;
        // self.brands = brand;
        // console.log(res)
      },
      fail: function () {

      }
    })
  }
}
</script>
<!--<style scoped lang="less">-->
<!--.container{-->
  <!--min-width: 100vh;-->
<!--}-->
<!--</style>-->
