<template>
  <div class="Banner" :style="{height:form === 'pointer' ? '145pt' : '66.666666vw'}">
    <swiper
      class="images"
      @change="switchItem('switchItem',$event)"
      :circular="true"
      :indicator-dots="false"
      :autoplay="true"
      :interval="5000"
      :duration="1000"
      :style="{height:form === 'pointer' ? '145pt' : '66.666666vw'}">
      <block v-for="(item, index) in banner" :index="index" :key="index">
        <swiper-item class="_item">
          <a :href="'/pages/web/main?url='+item.image_url">
            <image v-if="form === 'pointer'" :src="item.image_path" class="_img" mode="aspectFill"></image>
          </a>
          <image v-if="form === 'number'" :src="item.img_url" class="_img_01" mode="aspectFill"></image>
        </swiper-item>
      </block>
    </swiper>
    <div class="numBox" v-if="form === 'number'">
      <span class="curr">{{on + 1}}</span>
      <span class="total">&nbsp;/&nbsp;{{banner.length}}</span>
    </div>
    <ul v-if="form === 'pointer'" class="points" :style="{width:(banner.length-1) * 12 + 22 + 'pt' }">
      <li
        class="_item"
        @click="setOn(index)"
        v-for="(item,index) in banner"
        :key="index"
        :class="index === on && 'active'">
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        on: 0
      }
    },
    props: ['banner', 'form'],
    methods: {
      setOn (event) {
        console.log(event)
        // this.on = index
      },
      switchItem (prompt, e) {
        this.on = e.mp.detail.current
      }
    }
  }
</script>
<style scoped lang="less">
  .Banner {
    background: #333;
    width: 100%;
    overflow: hidden;
    position: relative;
    .images{
      ._item{
        width: 100vw;
        height: 100%;
        float:left;
        ._img{
          width: 100%;
        }
        ._img_01{
          width: 100%;
          height: 66.666666vw;
        }
      }
    }
    .points{
      position:absolute;
      bottom:10px;
      left: 50%;
      transform:translateX(-50%);
      ._item{
        height: 8pt;
        width: 8pt;
        border-radius: 4pt;
        border: 1pt solid #fff;
        float: left;
        box-sizing:border-box;
        transition:width .5s;
        transform-origin: 50% 50%;
        & + ._item{
          margin-left: 4pt;
        }
        &.active{
          width: 20pt;
          background: #fff;
        }
      }
    }
    .numBox{
      position:absolute;
      bottom:15pt;
      right:15pt;
      width:34pt;
      height:18pt;
      background: rgba(0,0,0,.6);
      color: #fff;
      text-align:center;
      line-height:18pt;
      display: flex;
      align-items:center;
      justify-content: center;
      .curr{
        font-size:30rpx;
      }
      .total{
        font-size:25rpx;
      }
    }
  }
</style>
