<template>
  <div class="collection">
    <account-title title="报价" :total="total"></account-title>
    <scroll-view
      :scroll-with-animation="true"
      @scrolltolower="onAdd"
      class="product_wrap"
      scroll-y>
      <div v-if="total">
        <products :products="list" @delete="onDelete" />
        <loading-over v-if="over"></loading-over>
      </div>
      <div class="null" v-else>
        <div class="center">
          <i class="iconfont icon-wushoucang"></i>
          <p class="text">
            您的报价为空
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
