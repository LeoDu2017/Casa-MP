<template>
  <div class="container">
    <common-loading v-if="show"></common-loading>
    <common-search></common-search>

  </div>
</template>

<script>

import CommonSearch from '@/components/common-search'
import CommonLoading from '@/components/common-loading'

export default {
  data () {
    return {
      show: true
    }
  },

  components: {
    CommonSearch,
    CommonLoading
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
    wx.request({
      url: 'https://www.italyclassico.com/wxapi/index/index',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: (res) => {
        setTimeout(() => { this.show = false }, 4500)

        console.log(this.show)
        // const {spaces, banner, purchase, recommend, like, prodlist, brand} = res.data.data
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
