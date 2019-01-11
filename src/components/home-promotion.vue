<template>
  <div class="promotion">
    <div style="padding-left:15pt;">
      <common-title :title="promotion.title"></common-title>
    </div>
    <div class="goodsWrap">
      <swiper
        class="swiper"
        :autoplay="false"
        :circular="true"
        interval="3000"
        duration="500"
        previous-margin="50rpx"
        next-margin="50rpx"
        @change="change">
        <block v-for="(item,index) in promotion.goods"  :key="item.id">
          <swiper-item class="_item" :class="{'active':active === index}">
            <a :href="'/pages/product/detail/main?id=' + item.prod_id" >
              <image class="_img" :src="item.image_path" mode="aspectFill"></image>
            </a>
            <div class="_bottom">
              <div class="_row">
                <div class="_l">
                  <span class="_current">￥{{item.act_price}}</span>
                  <span class="_price">￥{{item.price}}</span>
                </div>
                <span class="_join">
                  {{item.notice_num}}人关注
                </span>
              </div>
              <div class="_row">
                <counter-down :start="item.start_time" :end="item.end_time"></counter-down>
                <div class="_btn" @click="onFollow(item.prod_id,item.home_id)">
                  团购提醒
                </div>
              </div>
            </div>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="points_wrap">
      <ul class="points_list">
        <li class="points_item" v-for="item in promotion.goods" :key="item.id" :class="{'active':active === index}">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import store from '@/status/store'
  import CommonTitle from './units/c-title.vue'
  import CounterDown from './units/count-down.vue'

  export default {
    data () {
      return {
        touchStatus: false,
        startY: 0,
        timer: null,
        left: '10',
        active: 0
      }
    },
    props: ['promotion'],
    components: {
      CommonTitle,
      CounterDown
    },
    methods: {
      change (e) {
        let current = e.mp.detail.current
        this.active = current
      },
      onFollow (id, home) {
        wx.getStorage({
          key: 'token',
          success (_res) {
            wx.request({
              url: `${store.state.url}/wxapi/index/follow`,
              method: 'POST',
              data: {
                prod_id: id,
                home_id: home,
                token: _res.data
              },
              header: {
                'Accept': 'application/json'
              },
              success: (res) => {
                if (res.data.status === 1) {
                  wx.showToast({
                    title: res.data.msg,
                    icon: 'none',
                    duration: 2000
                  })
                } else {
                  wx.showToast({
                    title: res.data.msg,
                    icon: 'none',
                    duration: 2000
                  })
                }
              }
            })
          },
          fail: () => {
            wx.navigateTo({
              url: '/pages/login/in/in'
            })
          }
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .promotion {
    background: #fff;
    padding: 15pt 0;
    .goodsWrap{
      width: 100vw;
      height: 263px;
      overflow: hidden;margin-top: 16px;
      .swiper{
        height: 100%;
        ._item{
          width: 73.2vw;
          display:flex;
          flex-direction: column;
          justify-content: flex-start;
          ._l{
            display:flex;
            align-items: baseline;
          }
          ._img{
            width: 100%;
            transform: scale(0.95,0.9);
            display: block;
          }

          ._bottom{
            height:62px;
            background:#F5F5F5;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            box-sizing:border-box;
            width: 82.4vw;
            margin-left: 8px;
            margin-top: -15px;
            padding: 12px;

            ._row{
              display: flex;
              align-items: baseline;
              justify-content: space-between;

              ._l{
                display:flex;
                align-items: baseline;
              }
              ._current{
                font-size: 14px;
                color:#333;
                display: inline-block;
                margin-right:7px;
              }
              ._price{
                font-size: 10px;
                color:#ccc;
                text-decoration:line-through;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                word-break: break-all;
              }
              ._pre{
                font-size:10px;
                color:#999;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                word-break: break-all;
              }
              ._time{
                font-size:10pt;
                color:#333;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                word-break: break-all;
              }
              ._join{
                color:#999;
                font-size:10px;
              }
              ._btn{
                display: block;
                height: 20px;
                width:50px;
                background:#212224;
                border-radius:2px;
                color:#fff;
                font-size: 10px;
                text-align:center;
                line-height:20px;
              }
            }

            ._left{
              display:flex;
              flex-direction: column;
              justify-content: space-between;
              padding:15px 10px;

            }
            ._right{
              flex-direction: column;
              justify-content: space-between;
              align-items: flex-end;
              padding:10px;
              text-align: right;

            }
          }
          &.active{
            width: 80vw;
            ._bottom{
              width: 100%;
              margin-left:0;
              margin-top: 0;
            }
            ._img{
              transform: scale(1,1);
            }
          }
        }
      }
    }
    .points_wrap{
      .points_list{
        display:flex;
        justify-content: center;
        align-items: center;
        .points_item{
          height: 6px;
          width: 6px;
          border-radius: 50%;
          background: #ccc;
          &.active{
            background:#212224;
          }
          & + .points_item{
            margin-left: 5px;
          }
        }
      }
    }
  }

</style>
