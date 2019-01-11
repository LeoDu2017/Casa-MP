<template>
  <div id="Login">
    <u-title en="Login in" cn="登录"></u-title>
    <div class="form_box">
      <u-input icon="icon-zhanghu" placeholder="请输入您的手机号" @callBack="setPhone"></u-input>
      <u-input icon="icon-mima" placeholder="请输入您的密码" :hide="hide01" @callBack="setPassword">
        <i class="iconfont icon" :class="hide01 ? 'icon-biyan' : 'icon-yanjing'" @click="onSee"></i>
      </u-input>
      <button class="btn" @click="onSubmit('login')">登录</button>
      <p class="bottom">
        <a href="/pages/ucenter/forget/main?page=forget">忘记密码</a>
        <a href="/pages/ucenter/sign/main?page=sign">免费注册</a>
      </p>
    </div>
  </div>
</template>
<script src="../index.js"></script>
<style scoped lang="less">
  #Login {
    .form_box{
      padding: 20px;
    }
    .icon{
      font-size: 20px;
    }
    .btn{
      border-radius:10px;
      height: 47px;
      line-height: 47px;
      width:100%;
      background-color:#333;
      font-size: 18px;
      word-break:break-all;
      text-align: center;
      color: #fff;
      margin-top: 15px;
    }
    .bottom{
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      a{
        font-size: 14px ;
        color: #666;
        &:active,&hover{
          color: #000
        }
      }
    }
  }
</style>
