<template>
  <div class="see">
    <d-title title="预约看实物" subTitle="意大利之家为您奉上心动家具价格"></d-title>
    <d-input
      icon="icon-zhanghu"
      height="40"
      :value="phone"
      placeholder="请输入您的手机号"
      maxlength="11">
    </d-input>
    <d-input
      icon="icon-dizhi"
      height="100"
      placeholder="请输入您所在的城市"
      maxlength="100">
    </d-input>
    <button class="btn" @click="onSubmit">立即提交</button>
  </div>
</template>
<script src="../index.js"></script>
<style scoped lang="less">
  .see{
    padding: 15px;
    .btn{
      border-radius:4px;
      height: 47px;
      line-height: 47px;
      width:100%;
      background-color:#333;
      font-size: 18px;
      word-break:break-all;
      text-align: center;
      color: #fff;
      margin-top: 20px;
    }
  }
</style>
