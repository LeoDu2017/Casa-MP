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
    height: 49px;
    position: fixed;
    bottom:0;
    left:0;
    right:0;
    border-top:1px solid #E6E6E6;
    display:flex;
    font-size: 10pt;
    justify-content: space-between;
    padding-left: 25px;
    padding-right: 25px;
    align-items:flex-end;
    padding-bottom: 3pt;
    color:#666666;
    z-index:1000;
    .center{
      flex:0 0 53px;
      text-align: center;
      .iconfont{
        display:block;
      }
    }
    .circle{
      border-radius:50%;
      background: @gradient_black;
      color:#fff;
      height: 45px;
      width: 45px;
      line-height: 45px;
      border: 4px solid #fff;
      box-shadow: 0 -4px 10px 0 rgba(0, 0, 0, 0.04);
      .icon-zixun{
        font-size: 21px;
      }
    }
    .item{
      .iconfont{
        font-size: 18px;
        padding-bottom: 4px;
        .font_gradient_color;
      }
    }
  }
</style>
