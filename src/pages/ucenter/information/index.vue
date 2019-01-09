<template>
  <div id="Sign">
    <u-title en="Personal Information" cn="个人信息"></u-title>
    <div class="form_box">
      <u-input icon="icon-zhanghu" placeholder="请输入您的用户名" @callBack="setPhone"></u-input>

      <u-input icon="icon-login_shouji" placeholder="请输入您的手机号码" @callBack="setEmail"></u-input>

      <u-input icon="icon-youxiang" placeholder="请输入您的邮箱" @callBack="setEmail"></u-input>
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
      <button class="btn" @click="onSubmit">保存</button>

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
      color:#000;
      border:1px solid #cccccc;
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
        font-size: 14px;
      }
      radio {
        width: 60px;
      }
    }
  }
</style>
