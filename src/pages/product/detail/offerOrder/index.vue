<template>
  <div class="see">
    <d-title title="报价需求，一键送达" subTitle="意大利之家为您奉上心动家具价格"></d-title>
    <d-input
      icon="icon-zhanghu"
      height="40"
      :value="phone"
      placeholder="请输入您的手机号"
      @callBack="setPhone"
      maxlength="11">
    </d-input>
    <d-input
      icon="icon-xiangmuxuqiu"
      height="100"
      @callBack="setRemark"
      placeholder="请告诉我们您的需求"
      maxlength="100">
    </d-input>
    <button class="btn" @click="onSubmit(1)">立即提交</button>
    <common-division height="15"></common-division>
    <div class="wrap2">
      <div class="totalBox">
        已选
        <span class="number">
          {{total}}
        </span>
        件产品
      </div>
      <ul class="_list">
        <li class="_item">
          <div class="imgBox">
            <img class="_img" :src="prod_image"/>
          </div>
          <div class="_text">
            {{prod_name}}
          </div>
        </li>
      </ul>
    </div>
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
    .wrap2{
      .totalBox{
        display: flex;
        font-size: 14px;
        color:#999;
        margin-bottom: 12px;
        .number{
          color:#333;
        }
      }
      ._list {
        ._item{
          height: 60px;
          width: 100%;
          padding-bottom: 12px;
          border-bottom: 1px solid #ccc;
          display: flex;
          align-items: center;
          & + ._item{
            margin-top: 12px;
          }
          .imgBox{
            height: 60px;
            flex: 0 0 90px;
            ._img{
              height:100%;
              width:100%;
            }
          }
          ._text{
            flex:1;
            text-align: left;
            padding-left: 12px;
            font-size: 12px;
            color:#666;
          }
        }
      }
    }
  }
</style>
