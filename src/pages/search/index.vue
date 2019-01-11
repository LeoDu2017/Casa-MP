<template>
  <div class="warp">
    <div class="header">
      <div class="left">
        <search-input :go='0' @searchCallBack="searchCallBack" type="home"></search-input>
      </div>
      <span class="_btn">搜索</span>
    </div>
    <ul class="searchList" v-show="searchData">
      <li class="searchItem">在产品中搜索<span>“{{searchData}}”</span></li>
      <li class="searchItem">在品牌中搜索<span>“{{searchData}}”</span></li>
      <li class="searchItem">在案例/新闻中搜索<span>“{{searchData}}”</span></li>
    </ul>
  </div>
</template>
<script src="./index.js"></script>
<style scoped lang="less">
  .warp {
    min-height:100vh;
    background:#fff;
    .header{
      padding: 10px 15px;
      border-bottom: 1px solid #E6E6E6;
      display:flex;
      justify-content: space-between;
      .left{
        flex:1;
      }
      ._btn{
        color:#4d4d4d;
        font-size:12px;
        flex:0 0 40px;
        text-align:right;
      }
      align-items:center;
    }
    .searchList{
      .searchItem{
        height: 41pt;
        line-height:41pt;
        color: #666;
        font-size:12px;
        padding-left: 15px;
        span{
          color:#212224
        }
        border-bottom:1px solid #E6E6E6
      }
    }
  }
</style>
