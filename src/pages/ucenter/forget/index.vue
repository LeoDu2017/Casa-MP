<template>
  <div id="Sign">
    <u-title en="Retrieve Password" cn="找回密码"></u-title>
    <div class="form_box">
      <u-input icon="icon-zhanghu" placeholder="请输入您的手机号" @callBack="setPhone"></u-input>
      <u-input icon="icon-yanzhengma2" placeholder="请输入您的验证码" :hide="hide" @callBack="setCode">
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
      <button class="btn" @click="onSubmit">提交</button>
    </div>
  </div>
</template>
<script src="../index.js"></script>
<style scoped lang="less">
  #Sign {
    .form_box{
      padding: 15px;
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
      justify-content: center;
      margin-top: 15px;
      font-size: 14px ;
      color: #666;
      a{
        color: #000
      }
    }
    .verify_btn{
      width: 100px;
      height: 32px;
      text-align:center;
      line-height: 32px;
      font-size:14px;
      color: #000;
      border: 1px solid #cccccc;
      border-radius: 5px;
      &:hover,&:active{
        color: #fff;
        border-color: #212226;
        background-color: #212226;
      }
    }
    .mt40{
      margin-top: 20px;
    }
    .radioSex {
      display: flex;
      label {
        margin-right: 25px;
        font-size: 24px;
      }
      radio {
        width: 60px;
      }
    }
  }
</style>
