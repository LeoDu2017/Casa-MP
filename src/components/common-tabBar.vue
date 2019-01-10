<template>
  <ul>
    <li class="item">
      <a href="/pages/index/main">
        <i class="iconfont" :class="selected === '1' ? 'icon-Asset1' : 'icon-Asset'"></i>
        首页
      </a>
    </li>
    <li class="item">
      <a href="/pages/counter/main">
        <i class="iconfont" :class="selected === '2' ? 'icon-fenlei1' : 'icon-fenlei'"></i>
        分类
      </a>
    </li>
    <li class="center">
      <div class="circle">
        <i class="iconfont icon-zixun"></i>
      </div>
      在线咨询
    </li>
    <li class="item">
      <a href="/pages/brand/main">
        <i class="iconfont" :class="selected === '3' ? 'icon-pinpai1' : 'icon-pinpai'"></i>
        品牌
      </a>
    </li>
    <li class="item">
      <a href="/pages/ucenter/account/main?page=account">
        <i class="iconfont" :class="selected === '4' ? 'icon-zhanghu1' : 'icon-zhanghu'"></i>
        我的
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['selected']
  }
</script>

<style scoped lang="less">
  @import "../utils/common.less";
  ul{
    background:#fff;
    height: 49pt;
    position: fixed;
    bottom:0;
    left:0;
    right:0;
    border-top:1px solid #E6E6E6;
    display:flex;
    font-size: 10pt;
    justify-content: space-between;
    padding-left: 50rpx;
    padding-right: 50rpx;
    align-items:flex-end;
    padding-bottom: 3pt;
    color:#666666;
    z-index:1000;
    .center{
      flex:0 0 53pt;
      text-align: center;
      .iconfont{
        display:block;
      }
    }
    .circle{
      border-radius:50%;
      background: @gradient_black;
      color:#fff;
      height: 45pt;
      width: 45pt;
      line-height: 45pt;
      border: 4pt solid #fff;
      box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.04);
      .icon-zixun{
        font-size:21pt;
      }
    }
    .item{
      .iconfont{
        font-size: 18pt;
        padding-bottom:4pt;
        .font_gradient_color;
      }
    }
  }
</style>
