<template>
  <div>
    <div v-if="is_activity" class="activity-info">
      <div class="_top">
        <div class="price_box">
          <span class="curr"><i class="_symbol">￥</i>{{activity.act_price}}</span>
          <span class="origin">￥{{activity.price}}</span>
        </div>
        <counter-down :start="activity.start_time" :end="activity.end_time" color="white"></counter-down>
      </div>
      <div class="_bottom">
        <span class="group">
          <i class="title">团购价</i>{{activity.discount}}折
        </span>
        <span class="join">{{activity.buy_num}}人已参团</span>
      </div>
    </div>

    <div class="common-block">
      <p class="sub-title">{{subtitle}}</p>
      <p class="main-title"><span v-if="is_spot" class="symbol">现货</span>{{prod_name}}</p>
      <p class="addition-info">
        <span class="_left">产地：{{origin}}</span>
        <span>风格：{{pro_style}}</span>
      </p>
    </div>

    <division v-if="is_activity" height="15"></division>
    <div class="common-block">
      <dl class="parameter" :class="folder ? 'folder' : ''">
        <dt>
          <span class="title">参数</span>
          <i @click="toggleFolder" class="iconfont" :class="folder ? 'icon-up' : 'icon-down'"></i>
        </dt>
        <dd class="item" v-for="(item,index) in act_attr" :key="index"  v-if="item.attr_name && item.option_name">
          <label class="label">{{item.attr_name}}：</label>
          <span class="data">{{item.option_name}}</span>
        </dd>
        <dd class="item" v-for="(item,index) in attr" :key="index" v-if="item.attr_item && item.attr_cont">
          <label class="label">{{item.attr_item}}：</label>
          <span class="data">{{item.attr_cont}}</span>
        </dd>
      </dl>
    </div>
    <division v-if="is_activity" height="15"></division>
    <div class="common-block">
      <p class="dot-line" v-if="!is_activity"></p>
      <span class="apply-btn">申请报价</span>
      <p class="view-more" @click="setMore">
        <span class="text">更多</span>
        <i class="iconfont" :class="on ? 'icon-up' : 'icon-down'"></i>
      </p>
      <div class="more-detail" :class="on ? 'on' : ''">
        <ul class="_list">
          <li class="_item">
            <i class="iconfont icon-love"></i>
            <span class="_title">加入心愿单</span>
          </li>
          <li class="_item">
            <i class="iconfont icon-shoucang"></i>
            <span class="_title">添加收藏</span>
          </li>
          <li class="_item">
            <i class="iconfont icon-fenxiang"></i>
            <span class="_title">分享</span>
          </li>
          <li class="_item">
            <i class="iconfont icon-zhaopian2"></i>
            <span class="_title">看实物</span>
          </li>
          <li class="_item">
            <i class="iconfont icon-fuzhi"></i>
            <span class="_title">复制链接</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import Division from './common-division.vue'
  import CounterDown from './units/count-down.vue'
  export default {
    data () {
      return {
        on: false,
        folder: false
      }
    },
    props: ['subtitle', 'attr', 'act_attr', 'prod_name', 'origin', 'pro_style', 'is_activity', 'activity', 'is_spot'],
    methods: {
      setMore () {
        this.on = !this.on
      },
      toggleFolder () {
        this.folder = !this.folder
      }
    },
    components: {
      Division,
      CounterDown
    }
  }
</script>
<style scoped lang="less">
  .parameter{
    dt{
      display: flex;
      justify-content: space-between;
      .title{
        font-size: 24rpx;
        color:#999;
      }
      .iconfont{
        font-size: 28rpx;
        color:#999;
      }
    }
    height:15pt;
    box-sizing: border-box;
    transition:height .5s;
    overflow: hidden;
    &.folder{
      height:107pt;
    }
    .label{
      font-size:22rpx;
      color:#999;
    }
    .data{
      font-size:22rpx;
      color:#666;
      margin-left:20rpx;
    }
  }
  .activity-info{
    padding:5pt 15pt;
    background:#212224;
    color:#fff;
    height: 45pt;
    box-sizing:border-box;
    display:flex;
    justify-content: space-between;
    flex-direction:column;
    ._top{
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      .price_box{
        .curr{
          color:#fff;
          font-size:36rpx;
          margin-right: 7pt;
          ._symbol{
            font-size:24rpx;
            display: inline;
          }
        }
        .origin{
          font-size:24rpx;
          color:rgba(255,255,255,.6)
        }
      }
      .time{
        color:#fff;
        font-size:24rpx;
      }
    }
    ._bottom{
      display: flex;
      justify-content: space-between;
      .group{
        font-size: 24rpx;
        color: #FFFFFF;
        .title{
          color:rgba(255,255,255,.6);
          display:inline;
          margin-right:3pt;
        }
      }
      .join{
        color:rgba(255,255,255,.6);
        font-size:24rpx;
      }
    }
  }
  .common-block{
    padding:15pt;
    background: #fff;

    .sub-title{
      font-size: 25rpx;
      color:#999;
    }
    .main-title{
      font-size: 32rpx;
      color:#666;
      margin-top: 7pt;
      display: flex;
      align-items:center;
      .symbol{
        display:inline-block;
        width: 30pt;
        height: 16pt;
        background: #666;
        color: #fff;
        line-height: 16pt;
        text-align:center;
        font-size: 22rpx;
        border-radius: 2pt;
        margin-right: 7pt;
      }
    }
    .addition-info{
       margin-top: 12pt;
       font-size: 25rpx;
       color:#999;
       ._left{
         margin-right:30pt
       }
     }
    .dot-line{
      height: 1pt;
      border-bottom: 1pt dotted #999999;
      margin-top:15pt;
      margin-bottom:15pt;
      display: inline-block;
      width: 100%;
    }
    .apply-btn{
      width:74.6vw;
      height:40pt;
      background: #212224;
      color: #fff;
      display: block;
      font-size: 32rpx;
      text-align: center;
      line-height: 40pt;
      border-radius: 4pt;
      margin: 0 auto 25pt;
    }
    .view-more{
      text-align: center;
      .text{
        font-size: 28rpx;
        color:#333;
        cursor:pointer;
        display:inline-block;
        margin-right:5pt;
      }
      .iconfont{
        display:inline-block;
        cursor:pointer;
        color:#999;
      }
    }
    .more-detail{
      height: 0;
      overflow: hidden;
      transition: height .5s;
      &.on{
        height: 100px;
      }
      ._list{
        display: flex;
        justify-content: space-between;
        margin-top:23pt;
        ._item{
          flex-basis: 20%;
          text-align: center;
          .iconfont{
            color:#212224;
            font-size: 66rpx;
          }
          ._title{
            color:#999999;
            font-size: 25rpx;
          }
        }
      }
    }
  }
</style>
