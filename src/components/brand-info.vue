<template>
  <div class="info" :class="{'unfold': unfold}">
    <div class="left">
      <img :src="info.brand_logo" class="img" />
      <div class="text">
        <span class="title">{{info.brand_url_name}}</span>
        <span class="origin">{{info.origin}}</span>
      </div>
    </div>
    <i class="iconfont" @click="onFold" :class="unfold ? 'icon-up' : 'icon-down'"></i>
    <scroll-view
      scroll-y
      class="detail">
      <img :src="info.brand_image" class="img" />
      <wxParse :content="info.brand_detail" />
    </scroll-view>
  </div>
</template>

<script>
  import wxParse from 'mpvue-wxparse'
  export default {
    data () {
      return {
        unfold: false
      }
    },
    props: ['info'],
    components: {
      wxParse
    },
    watch: {
      info () {
        Object.assign(this, {info: this.info})
        wx.setNavigationBarTitle({
          title: this.info.brand_url_name
        })
      }
    },
    methods: {
      onFold () {
        this.unfold = !this.unfold
      }
    }
  }
</script>

<style scoped lang="less">
  @import url("~mpvue-wxparse/src/wxParse.css");
  .info{
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: 33px;
    overflow: hidden;
    transition: height 1s;
    border-bottom: 1px solid #E6E6E6;
    &.unfold{
      height: 300px;
      overflow: hidden;
      overflow-y: auto;
    }
    .left{
      height: 33px;
      display: flex;
      .img{
        border: 1px solid #E6E6E6;
        height: 33px;
        width: 50px;
      }
      .text{
        display: flex;
        flex-direction: column;
        padding-left: 15px;
        justify-content: space-between;
        .title{
          color: #333;
          font-size: 14px;
          line-height: 14px;
        }
        .origin{
          color: #999;
          font-size: 12px;
          line-height: 12px;
        }
      }
    }
    .detail{
      width: 100%;
      padding-top: 15px;
      height: 237px;
      .img{
        width: 100%;
        height: 149px;
      }
    }
  }
</style>
