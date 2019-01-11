<template>
  <ul class="case_box">
    <li class="_item" v-for="(item ,index) in cases" :key="index">
      <div class="_left">
        <img class="_img" :src="item.article_img"/>
      </div>
      <div class="_right">
        <p class="title">{{item.article_name}}</p>
        <case-time :date="item.article_date"></case-time>
        <p class="tag">
          <i class="iconfont icon-biaoqian"></i>
          {{item.article_option_name}}
        </p>
      </div>
    </li>
  </ul>
</template>
<script>
  import CaseTime from './case-time.vue'
  export default {
    props: ['cases'],
    computed: {
      getDay () {
        return function (date) {
          return date.split('-')[2]
        }
      },
      getMonth () {
        return function (date) {
          return date.split('-')[1]
        }
      },
      getYear () {
        return function (date) {
          return date.split('-')[0]
        }
      }
    },
    components: {
      CaseTime
    }
  }
</script>
<style scoped lang="less">
  .case_box{
    width: 100%;
    height: 106px;
    ._item{
      margin-top:15px;
      display: flex;
      justify-content: space-between;
      ._right,
      ._left{
        width: calc((100vw - 41px) / 2);
        height: 106px;
      }
      ._left{
        ._img{
          height:100%;
          width:100%;
        }
      }
      ._right{
        .title{
          color:#333;
          font-size: 15px
        }
        .tag{
          font-size: 15px;
          .iconfont{
            font-size: 15px;
            display: inline-block;
          }
        }
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        align-items:flex-start;
      }
    }
  }
</style>
