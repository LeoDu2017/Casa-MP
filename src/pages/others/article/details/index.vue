<template>
  <div class="details">
    <image mode="widthFix" :src="art_banner" class="banner_img"></image>
    <div class="_header">{{detail.article_name}}</div>
    <div class="header_dis">
      <div class="tag">
        <i class="iconfont icon-biaoqian"></i>
        <span>{{detail.article_tag}}</span>
      </div>
      <div class="time">
        <i class="iconfont icon-dingdan2"></i>
        <span>{{detail.edit_date}} {{detail.edit_time}}</span>
      </div>
    </div>

    <div class="product_info">
      <wxParse :content="detail.article_content" />
      <div class="go_page">
        <a :href="'./main?article_id='+detail.next.id">
          <span class="pre">上一篇：{{detail.next.article_name}}</span>
        </a>
      </div>
      <div class="go_page">
        <a :href="'./main?article_id='+detail.prev.id">
          <span class="next">下一篇：{{detail.prev.article_name}}</span>
        </a>
      </div>
    </div>
    <div class="about_pro" v-if='prod_list.length'>
      <h1 class="about_title">相关产品</h1>
      <div class="about_line"></div>
      <products :products="prod_list"></products>
    </div>
  </div>
</template>

<script>
  import store from '@/status/store'
  import wxParse from 'mpvue-wxparse'
  import art_banner from '@/imgs/art_banner.jpg'
  import Products from '@/components/product-showcase'
  export default {
    data () {
      return {
        art_banner,
        prod_list: [],
        detail: null
      }
    },
    onLoad ({article_id, words}) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#7a7a7a',
        animation: {
          duration: 100,
          timingFunc: 'easeIn'
        }
      })
      const {serverSide} = this
      wx.request({
        url: `${serverSide}/wxapi/article/getArticleDetail`,
        data: {article_id, words},
        success: ({data: {status, data: {prod_list, detail}}}) => {
          Object.assign(this, {prod_list, detail})
        }
      })
    },
    computed: {
      serverSide () {
        return store.state.serverSide
      }
    },
    components: {
      wxParse,
      Products
    }
  }
</script>

<style scoped>
  @import url("~mpvue-wxparse/src/wxParse.css");
  .banner_img {
    width: 100%;
  }

  ._header {
    font-size: 20px;
    color: #333333;
    font-weight: 600;
    text-align: center;
    padding-top: 25px;
  }

  .header_dis {
    width: 90%;
    margin-left: 5%;
    color: #999;
    font-size: 14px;
    padding: 10px;
    border-bottom: 1px solid #999;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
  }

  .header_dis .tag {
    width: 50%;
    float: left;
    display: flex;
  }

  .header_dis .time {
    width: 50%;
    float: right;
    text-align: right;
    display: flex;

  }

  .header_dis .tag, .header_dis .time text {
    color: #999;
  }

  .icon-biaoqian, .icon-dingdan2 {
    color: #999;
  }

  .product_info {
    padding: 15px;
    color: #333;
  }

  .go_page {
    overflow: hidden;
  }

  .go_page .pre {
    width: 100%;
    padding-left: 2px;
    box-sizing: border-box;
    font-size: 12px;
  }

  .go_page .next {
    width: 100%;
    padding-left: 2px;
    box-sizing: border-box;
    font-size: 12px;
  }

  .about_title {
    font-size: 18px;
    line-height: 18px;
    font-weight: bold;
    margin-left: 15px;
  }

  .about_line {
    width: 40px;
    height: 2px;
    background: #999;
    margin-top: 15px;
    margin-left: 15px;
  }

  /* 相关产品 */
  .category_list {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 18px;
    overflow: hidden;
    margin-top: 40px;
  }

  .category_list .brand_list {
    width: 49%;
    float: left;
    margin-left: 2%;
    margin-bottom: 10px;
  }

  .category_list .brand_list:nth-child(odd) {
    margin-left: 0;
  }

  .category_list .brand_list image {
    width: 100%
  }

  .category_list .brand_list text {
    display: block;
    font-size: 12px;
    line-height: 20px;
    color: #333;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }

  .category_list .brand_list .pro_brand {
    margin-top: 5px;
    color: #333;
    height: 15px;
    line-height: 15px;
    font-size: 14px;
  }

  .wxParse-inline {
    line-height: 25px;
  }
</style>
