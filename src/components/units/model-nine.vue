<template>
  <li class="quote_item">
    <div class='content_word'>
      <p class='p'>
        <span class='label'>报价单编号：</span>
        <span class='text'>{{quote.order_sn}}</span>
      </p>
      <p class='p'>
        <span class='label'>报价状态：</span>
        <span class='text'>{{quote.status}}</span>
      </p>
      <p class='p'>
        <span class='label'>手机号码：</span>
        <span class='text'>{{quote.customer_phone}}</span>
      </p>
      <p class='p'>
        <span class='label'>我的需求：</span>
        <span class='text'>{{quote.remark}}</span>
      </p>
    </div>

    <ul class="goodsInfo">
      <li class="item" v-for="(item, index) in quote.list" :key="index">
        <div class="imgBox">
          <img class="img" :src="item.prod_image" :alt="item.prod_name" />
        </div>
        <div class="infoBox">
          <p class='title'>名称：{{item.prod_name}}</p>
          <p class='title'>品牌：{{item.brand_name}}</p>
          <p class='title'>分类：{{item.class_a}} > {{item.class_b}} > {{item.class_c}}</p>
        </div>
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    props: ['quote']
  }
</script>

<style scoped lang="less">
  .quote_item{
    border-top: 1px solid #e5e5e5;
    padding-top: 10px;
    padding-bottom: 10px;
    &:first-child{
      border: none;
      padding-top: 0;
    }
    .content_word{
      .p{
        display: flex;
        align-items: baseline;
        font-size: 14px;
        height: 20px;
        line-height: 20px;
        .label{
          color: #999;
        }
        .text{
          color: #333;
        }
      }
    }
    .goodsInfo{
      .item{
        display: flex;
        padding-top: 10px;
        .imgBox{
          width: 75px;
          height: 50px;
          .img{
            width: 100%;
            height: 100%;
          }
        }
        .infoBox{
          padding-left: 10px;
          .title{
            height: 17px;
            line-height: 17px;
            font-size: 12px;
            color: #666;
          }
        }
      }
    }
  }
</style>
