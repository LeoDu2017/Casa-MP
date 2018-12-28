<template>
  <div class="case_box">
    <a  class="_item" v-for="(item,index) in article"
        :key="index"
        :href=`/pages/article/articleDetail/articleDetail?article_id=${item.id}`>
      <div class="_left">
        <img :src="item.article_img" class="_img"/>
      </div>
      <div class="_right">
        <div class="title">{{item.article_name}}</div>
        <!--<formatTime date="{{item.article_date}}"></formatTime>-->

        <div class="tag">
          <i class="iconfont icon-biaoqian"></i>
          {{item.article_option_name}}
        </div>
      </div>

    </a>
  </div>
</template>
<script>
  export default {
    props: ['article']
  }
</script>
<style scoped lang="less">
  .caseBox{
    padding:30rpx;
    width: 100%;
    height: 212rpx;
    ._item {
      margin-top: 30rpx;
      display: flex;
      justify-content: space-between;
      ._right,._left{
        width: calc((100vw - 82rpx) / 2);
        height: 212rpx;
        ._img{
          height:100%;
          width:100%;
        }
      }
      ._right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding-left:22rpx;
        .title{
          color:#333;
          font-size: 28rpx
        }
        .tag{
          font-size: 30rpx;
          .iconfont{
            font-size: 30rpx;
            display: inline-block;
          }
        }
      }
    }
  }
</style>
