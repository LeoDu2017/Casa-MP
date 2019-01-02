<template>
  <div id="Login">
    <u-title en="Login in" cn="登录"></u-title>
    <div class="form_box">
      <u-input icon="icon-zhanghu" placeholder="请输入您的手机号" @callBack="setPhone"></u-input>
      <u-input icon="icon-mima" placeholder="请输入您的密码" :hide="hide" @callBack="setPassword">
        <i class="iconfont icon" :class="hide ? 'icon-biyan' : 'icon-yanjing'" @click="onSee"></i>
      </u-input>
      <button class="btn" @click="onSubmit">登录</button>
      <p class="bottom">
        <a href="/pages/ucenter/forget/main">忘记密码</a>
        <a href="/pages/ucenter/sign/main">免费注册</a>
      </p>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style scoped lang="less">
  #Login {
    .form_box{
      padding: 30rpx;
    }
    .icon{
      font-size: 40rpx;
    }
    .btn{
      border-radius:10px;
      height:94rpx;
      line-height:94rpx;
      width:100%;
      background-color:#333;
      font-size:36rpx;
      word-break:break-all;
      text-align: center;
      color: #fff;
      margin-top: 30rpx;
    }
    .bottom{
      display: flex;
      justify-content: space-between;
      margin-top: 30rpx;
      a{
        font-size: 28rpx ;
        color: #666;
        &:active,&hover{
          color: #000
        }
      }
    }
  }
</style>
