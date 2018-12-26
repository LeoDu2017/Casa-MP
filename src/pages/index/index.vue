<template>
  <div class="container">
    <common-loading></common-loading>
    <common-search></common-search>
    <common-banner :banner="banner" form="pointer"></common-banner>
    <home-slogan title="买进口家具 找有荣-意大利之家"></home-slogan>
    <home-promotion :promotion="promotion"></home-promotion>
  </div>
</template>

<script>
import store from '@/status/store'
import CommonSearch from '@/components/common-search'
import CommonLoading from '@/components/common-loading'
import CommonBanner from '@/components/common-banner'
import HomeSlogan from '@/components/home-slogan'
import HomePromotion from '@/components/home-promotion'

export default {
  data () {
    return {
      show: true,
      banner: []
    }
  },

  components: {
    CommonSearch,
    CommonLoading,
    CommonBanner,
    HomeSlogan,
    HomePromotion
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
