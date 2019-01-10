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
          <i @click="toggleStatus('folder')" class="iconfont" :class="folder ? 'icon-up' : 'icon-down'"></i>
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
      <span class="apply-btn" :class="{'disabled': now < activity.start_time || now > activity.end_time}" v-if="is_activity" @click="onPay">支付预定金</span>
      <span class="apply-btn" v-else @click="offerOrder">申请报价</span>
      <p class="view-more" @click="toggleStatus('on')">
        <span class="text">更多</span>
        <i class="iconfont" :class="on ? 'icon-up' : 'icon-down'"></i>
      </p>
      <div class="more-detail" :class="on ? 'on' : ''">
        <ul class="_list">
          <li class="_item" @click="onToggle(0,is_wish)">
            <i class="iconfont" :class="is_wish?'icon-xin_02':'icon-love'"></i>
            <span class="_title">加入心愿单</span>
          </li>
          <li class="_item" @click="onToggle(1,is_collect)">
            <i class="iconfont" :class="is_collect ? 'icon-shoucang0' :'icon-shoucang'"></i>
            <span class="_title">添加收藏</span>
          </li>
          <li class="_item">
            <button class="iconfont icon-fenxiang share_btn" open-type='share'></button>
            <span class="_title">分享</span>
          </li>
          <li class="_item" @click="toSeeReal">
            <i class="iconfont icon-zhaopian2"></i>
            <span class="_title">看实物</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import store from '@/status/store'
  import Division from './common-division.vue'
  import CounterDown from './units/count-down.vue'

  export default {
    data () {
      return {
        on: false,
        folder: false
      }
    },
    props: [
      'id',
      'subtitle',
      'attr',
      'act_attr',
      'prod_name',
      'origin',
      'pro_style',
      'is_activity',
      'is_wish',
      'is_collect',
      'activity',
      'is_spot'],
    computed: {
      now () {
        return Date.parse(new Date()) / 1000
      },
      isLogin () {
        return store.state.isLogin
      },
      token () {
        return store.state.token
      },
      serverSide () {
        return store.state.serverSide
      }
    },
    methods: {
      onToggle (type, status) {
        const {id, token, toggleStatus, getUrl, checkLogin} = this
        const s = type ? 'on' : 'off'
        const state = status ? 'is_collect' : 'is_wish'
        const url = getUrl(s).status
        checkLogin()
        wx.request({
          url,
          method: 'GET',
          data: {id, token},
          header: {'Accept': 'application/json'},
          success ({data: {status, info, msg}}) {
            status === 1 && toggleStatus(state)
            info && wx.showToast({
              title: info || msg,
              icon: 'none',
              duration: 2000
            })
          },
          fail () {
            wx.showToast({
              title: '数据请求失败，请检查网络链接',
              icon: 'none'
            })
          }
        })
      },
      toSeeReal () {
        const {id, token, serverSide} = this
        this.checkLogin()
        wx.request({
          url: `${serverSide}/wxapi/product/mSeeRealProd`,
          method: 'GET',
          data: {id, token},
          header: {
            'Accept': 'application/json'
          },
          success ({data: {status, info, data: {user}}}) {
            status === 1 && wx.navigateTo({
              url: `seeTheReal/seeTheReal?id=${id}&mobile=${user.csr_mobile}`
            })
            info && wx.showToast({
              title: info,
              icon: 'fails',
              duration: 2000
            })
          },
          fail () {
            wx.showToast({
              title: '数据请求失败，请检查网络链接',
              icon: 'none'
            })
          }
        })
      },
      onPay () {
        const {id} = this
        this.checkLogin()
        wx.navigateTo({
          url: `/page/ucenter/quotation/main?id=${id}`
        })
      },
      toggleStatus (state) {
        this[state] = !this[state]
      },
      checkLogin () {
        !this.isLogin && wx.navigateTo({
          url: `/pages/ucenter/login/main?productId=${this.id}`
        })
      },
      getUrl (status) {
        return {
          on: [`${this.serverSide}/wxapi/user/delWith`, `${this.serverSide}/wxapi/user/delProdCollect`],
          off: [`${this.serverSide}/wxapi/product/addProdToWish`, `${this.serverSide}/wxapi/product/collectProdById`]
        }[status]
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
        font-size: 12px;
        color:#999;
      }
      .iconfont{
        font-size: 14px;
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
      font-size: 12px;
      color:#999;
    }
    .data{
      font-size: 12px;
      color:#666;
      margin-left: 10px;
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
          font-size: 18px;
          margin-right: 7pt;
          ._symbol{
            font-size: 12px;
            display: inline;
          }
        }
        .origin{
          font-size: 12px;
          color:rgba(255,255,255,.6)
        }
      }
      .time{
        color:#fff;
        font-size: 12px;
      }
    }
    ._bottom{
      display: flex;
      justify-content: space-between;
      .group{
        font-size: 12px;
        color: #FFFFFF;
        .title{
          color:rgba(255,255,255,.6);
          display:inline;
          margin-right:3pt;
        }
      }
      .join{
        color:rgba(255,255,255,.6);
        font-size: 12px;
      }
    }
  }
  .common-block{
    padding:15pt;
    background: #fff;

    .sub-title{
      font-size: 12px;
      color:#999;
    }
    .main-title{
      font-size: 16px;
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
        font-size: 12px;
        border-radius: 2pt;
        margin-right: 7pt;
      }
    }
    .addition-info{
       margin-top: 12pt;
       font-size: 12px;
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
      font-size: 16px;
      text-align: center;
      line-height: 40pt;
      border-radius: 4pt;
      margin: 0 auto 25pt;
      &.disabled {
        background: #ccc;
        pointer-events: none;
      }
    }
    .view-more{
      text-align: center;
      .text{
        font-size: 14px;
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
            font-size: 33px;
          }
          ._title{
            color:#999999;
            font-size: 12px;
          }
        }
      }
    }
  }
  .share_btn{
    border-radius:50%;
    background:#fff;
    height: 40px;
    width: 40px;
    border:1pt solid #fff;

    display:flex;
    align-items:center;
    justify-content:center;


    line-height:1 !important;

    color:#212224;
    font-size: 33px !important;

  }
</style>
