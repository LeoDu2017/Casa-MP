<template>
  <div class="collection">
    <account-title title="心愿" :total="total"></account-title>
    <scroll-view
      :scroll-with-animation="true"
      @scrolltolower="onAdd"
      class="product_wrap"
      scroll-y>
      <div class="products_list" v-if="total">
        <checkbox-group @change="onChange">
          <products :products="list" @delete="onDelete" />
        </checkbox-group>
        <loading-over v-if="over"></loading-over>
        <div class="bottom">
          <button class="btn" @click="onApply">申请报价</button>
        </div>
      </div>
      <div class="null" v-else>
        <div class="center">
          <i class="iconfont icon-wushoucang"></i>
          <p class="text">
            您的收藏为空
            <a class="red" href="/pages/product/list/main?uclassb=furniture">去逛逛</a>
          </p>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script src="./index.js"></script>

<style scoped lang="less">
  .collection{
    height: 100vh;
    width: 100vw;
    padding: 0 15px;
    overflow: hidden;
    box-sizing: border-box;
    .product_wrap{
      width: 100%;
      height: calc(100vh - 50px);
      margin-top: 15px;
      .products_list{
        .bottom{
          height: 100px;
          width: 100%;
          margin-top:30px;
          margin-bottom:50px;
          .btn{
            width: 150px;
            height: 40px;
            background:#212224;
            font-size:16px;
            color:#fff;
            text-align: center;
            line-height: 40px;
            border-radius: 4px;
          }
        }
      }
      .null{
        height: 100%;
        width: 100%;
        overflow: hidden;
        text-align: center;
        position: relative;
        .center{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          .iconfont{
            font-size: 100px;
          }
          .text{
            font-size: 14px;
            .red{
              color: orangered;
            }
          }
        }
      }
      .products{
        margin-bottom: 15px;
      }
    }
  }
</style>
