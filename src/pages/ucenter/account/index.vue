<template>
  <div class="account">
    <common-loading></common-loading>
    <div class="profile_box">
      <canvas canvas-id="wave" :style="{height:height + 'px'}"></canvas>
      <div class="profile_photo" :style="{top:height - 63 + 'px'}">
        <open-data class="avatar" v-if="isLogin" type="userAvatarUrl"></open-data>
        <i v-else class="iconfont icon-zhanghu"></i>
      </div>
      <a href="/pages/ucenter/information/main" class="row" v-if="isLogin">
        <!--<i class="phone">{{phone}}</i>-->
        <i class="phone">
          <open-data type="userNickName"></open-data>
        </i>
        <i class='iconfont icon-return'></i>
      </a>
      <div class="row" v-else>
        <a class="btn" href="/pages/ucenter/login/main">登录</a>
        <a class="btn active" href="/pages/ucenter/sign/main">注册</a>
      </div>
    </div>
    <common-division height="10"></common-division>
    <div class="menu_box">
      <ul class="row">
        <li class="item">
          <a :href="isLogin ? '/pages/ucenter/collection/main':'/pages/ucenter/login/main'">
            <i class="iconfont icon-shoucang0"></i>
            <span class="text">产品收藏</span>
          </a>
        </li>
        <li class="item">
          <a :href="isLogin ? '/pages/ucenter/inspiration/main':'/pages/ucenter/login/main'">
            <i class="iconfont icon-zhaopian"></i>
            <span class="text">灵感收藏</span>
          </a>
        </li>
        <li class="item">
          <a :href="isLogin ? '/pages/ucenter/wish/main':'/pages/ucenter/login/main'">
            <i class="iconfont icon-xin_02"></i>
            <span class="text">我的心愿</span>
          </a>
        </li>
      </ul>
      <ul class="row">
        <li class="item">
          <a :href="isLogin ? '/pages/ucenter/quoteOrder/main':'/pages/ucenter/login/main'">
            <i class="iconfont icon-baojiahou"></i>
            <span class="text">我的报价</span>
          </a>
        </li>
        <li class="item">
          <a :href="isLogin ? '/pages/ucenter/orderList/main':'/pages/ucenter/login/main'">
            <i class="iconfont icon-dingdan2"></i>
            <span class="text">我的订单</span>
          </a>
        </li>
        <li class="item">
          <a :href="isLogin ? '/pages/ucenter/pwdEdit/main':'/pages/ucenter/login/main'">
            <i class="iconfont icon-xiugai"></i>
            <span class="text">修改密码</span>
          </a>
        </li>
      </ul>
    </div>
    <common-division height="110">
      <span class="service">
        咨询客服：400-065-0601
      </span>
    </common-division>
    <tab-bar selected="4"></tab-bar>
  </div>
</template>

<script src="./index.js"></script>
<style scoped lang="less">
  @import "../../../utils/common.less";
  .account{
    width: 100vw;
    height: 100vh;
    .profile_box{
      position: relative;
      canvas {
        width: 100%;
      }
      .avatar{
        border-radius: 50%;
      }
      .profile_photo{
        width: 66px;
        height: 66px;
        line-height: 66px;
        background-color: #DEDEDE;
        border:4px solid #fff;
        border-radius: 50%;
        position: absolute;
        cursor: pointer;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
        left: 50%;
        transform: translateX(-50%);
        color: #999;
        text-align: center;
        z-index: 10000;
        overflow: hidden;
        .icon-zhanghu{
          font-size: 30px;
        }
      }
      .row{
        margin: 30px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        i{
          display: inline-block;
          &.phone{
            font-size:16px;
            font-family:PingFangSC-Regular,'微软雅黑',monospace;
            font-weight:400;
            color: #212224;
            line-height:0;
          }
          &.iconfont{
            color: #666666;
            font-size: 12px;
            margin-left: 10px;
          }
        }
        .btn{
          width:80px;
          height:30px;
          text-align:center;
          line-height:30px;
          border:1px solid #999999;
          border-radius:6px;
          font-size:14px;
          & + .btn{
            margin-left: 30px;
          }
          &.active{
            background-color:#333;
            border-color: #333;
            color: #fff;
          }
        }
      }
    }
    .menu_box{
      padding: 40px 35px;
      .row{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        & + .row{
          margin-top: 40px;
        }
        .item{
          text-align: center;
          .iconfont{
            .font_gradient_color;
            font-size: 40px;
          }
          .icon-zhaopian{
            font-size: 30px;
            margin-bottom: 5px;
            margin-top: 5px;
          }
          .text{
            font-size:14px;
            font-family:PingFangSC-Regular,serif;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:0;
          }
        }
      }

    }
    .service{
      font-size:12px;
      font-weight:400;
      color:rgba(102,102,102,1);
      padding-top: 15px;
      text-align: center;
      width:100%;
      display:block;
    }
  }

</style>
