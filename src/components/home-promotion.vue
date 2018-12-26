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
            <a :href="'/pages/product/main?id=' + item.prod_id" >
              <image class="_img" :src="item.image_path" mode="aspectFill"></image>
            </a>
            <div class="_bottom">
              <div class="_left">
                <div class="_row">
                  <span class="_current">￥{{item.act_price}}</span>
                  <span class="_price">￥{{item.price}}</span>
                </div>
                <div class="_row">
                  <span class="_pre">距结束还有：</span>
                  <span class="_time">2天23时37分</span>
                </div>
              </div>
              <div class="_right">
                <span class="_join">
                  {{item.notice_num}}人关注
                </span>
                <a class="_btn" href="">
                  团购提醒
                </a>
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
  import CommonTitle from './units/c-title.vue'
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
      CommonTitle
    },
    methods: {
      change (e) {
        let current = e.mp.detail.current
        this.active = current
      }
    }
  }
</script>
<style scoped lang="less">
  .promotion {
    background: #fff;
    padding: 15pt 0;
    .goodsWrap{
      width: 100%;
      height: 263pt;
      overflow: hidden;margin-top: 16pt;
      .swiper{
        height: 100%;
        ._item{
          width: 73.2vw;
          display:flex;
          flex-direction: column;
          justify-content: flex-start;
          ._img{
            width: 100%;
            transform: scale(0.95,0.9);
            display: block;
          }

          ._bottom{
            height:62pt;
            background:#F5F5F5;
            display: flex;
            justify-content: space-between;
            box-sizing:border-box;
            width: 82.4vw;
            margin-left: 15rpx;
            margin-top: -30rpx;
            ._left{
              display:flex;
              flex-direction: column;
              justify-content: space-between;
              padding:15pt 10pt;
              ._row{
                display: flex;
                align-items: baseline;
                ._current{
                  font-size: 14pt;
                  color:#333;
                  display: inline-block;
                  margin-right:7pt;
                }
                ._price{
                  font-size: 10pt;
                  color:#ccc;
                  text-decoration:line-through;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 1;
                  -webkit-box-orient: vertical;
                  word-break: break-all;
                }
                ._pre{
                  font-size:10pt;
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
              }
            }
            ._right{
              flex-direction: column;
              justify-content: space-between;
              align-items: flex-end;
              padding:10pt;
              text-align: right;
              ._join{
                color:#999;
                font-size:10pt;
              }
              ._btn{
                display: block;
                height: 20pt;
                width:50pt;
                background:#212224;
                border-radius:2pt;
                color:#fff;
                font-size: 10pt;
                text-align:center;
                line-height:20pt;
              }
            }
          }
          /*& + li{*/
          /*margin-left:10pt;*/
          /*}*/
          &.active{
            width: 80vw;
            /*.img_wrap{*/
            /*height: 481rpx;*/
            /*}*/
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
          height: 6pt;
          width: 6pt;
          border-radius: 50%;
          background: #ccc;
          &.active{
            background:#212224;
          }
          & + .points_item{
            margin-left: 5pt;
          }
        }
      }
    }
  }

</style>
