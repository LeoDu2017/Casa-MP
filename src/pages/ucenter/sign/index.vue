<template>
  <div id="Sign">
    <u-title en="Sign Up" cn="注册"></u-title>
    <div class="form_box">
      <u-input icon="icon-zhanghu" placeholder="请输入您的手机号" @callBack="setPhone"></u-input>
      <u-input icon="icon-yanzhengma2" placeholder="请输入您的验证码" :hide="hide" @callBack="setPassword">
        <span class="verify_btn" @click="getCode">
           {{timeState}}
        </span>
      </u-input>
      <u-input icon="icon-mima" placeholder="请输入您的密码" :hide="hide01" @callBack="setPassword">
        <i class="iconfont icon" :class="hide01 ? 'icon-biyan' : 'icon-yanjing'" @click="onSee('hide01')"></i>
      </u-input>
      <u-input icon="icon-mima" placeholder="确认密码" :hide="hide02" @callBack="confirmPassword">
        <i class="iconfont icon" :class="hide02 ? 'icon-biyan' : 'icon-yanjing'" @click="onSee('hide02')"></i>
      </u-input>

      <u-input icon="icon-youxiang" placeholder="请输入您的邮箱（选填）" @callBack="setEmail"></u-input>
      <radio-group class="radioSex mt40" @change="setSex">
        <label class="sex">
          <radio value="1" color="#333" checked="">先生</radio>
        </label>
        <label class="sex">
          <radio value="2" color="#333" checked="">女士</radio>
        </label>
        <label class="sex">
          <radio value="0" color="#333" checked="">保密</radio>
        </label>
      </radio-group>
      <button class="btn" @click="onSubmit">注册</button>
      <div class="bottom">
        <span>已有账号,</span>
        <a href="/pages/ucenter/login/main">去登录</a>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style scoped lang="less">
  #Sign {
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
      justify-content: center;
      margin-top: 30rpx;
      font-size: 28rpx ;
      color: #666;
      a{
        color: #000
      }
    }
    .verify_btn{
      width:200rpx;
      height:64rpx;
      text-align:center;
      line-height:64rpx;
      font-size:14px;
      color:#000;
      border:1rpx solid #cccccc;
      border-radius:10rpx;
      &:hover,&:active{
        color: #fff;
        border-color: #212226;
        background-color: #212226;
      }
    }
    .mt40{
      margin-top: 40rpx;
    }
    .radioSex {
      display: flex;
      label {
        margin-right: 50rpx;
        font-size: 28rpx;
      }
      radio {
        width: 108rpx;
      }
    }
  }
</style>
