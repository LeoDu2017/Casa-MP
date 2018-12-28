<template>
  <div class="tabBox">
    <div class="tab" v-if="modular.length > 4">
      <block v-for="(item,index) in modular" :key="index">
        <span
          class="item"
          :class="{'active' : current_i === index}"
          @click="scrollTab(index,`detail_${index}`)"
          v-if="index < 3">
          {{item.mod_name}}
        </span>
        <span class="division" v-if="index < 3"></span>
      </block>

      <div class="item" @click="showMoreDetail">更多内容</div>

      <div class="more" :class="{'show':show_more_detail}">
        <span
          class="item"
          :class="{'active': current_i === index}"
          @click="scrollTab(index,`detail_${index}`)"

          v-for="(item,index) in modular"
          :key="index"
          v-if="index >= 3">
          {{item.mod_name}}
        </span>
        <span class="item"
              :class="{'active' : current_i === modular.length}"
              @click="scrollTab(modular.length,`detail_${modular.length}`)"
              v-if="len">商品案例</span>
      </div>
    </div>
    <div class="tab" v-else>
      <block v-for="(item,index) in modular" :key="index">
        <span class="item"
              :class="{'active': current_i === index}"
              @click="scrollTab(index,`detail_${index}`)">{{item.mod_name}}</span>
        <span class="division" v-if="index < 2"></span>
      </block>

      <div class="item"
           :class="{'active' : current_i === modular.length}"
           @click="scrollTab(modular.length,`detail_${modular.length}`)"
           v-if="len">商品案例</div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        show_more_detail: false
      }
    },
    props: ['modular', 'len'],
    methods: {
      showMoreDetail () {
        console.log(56, this.show_more_detail)
        this.show_more_detail = !this.show_more_detail
      }
    }
  }
</script>
<style scoped lang="less">
  .tabBox {
    .tab{
      height:28rpx;
      line-height: 28rpx;
      display: flex;
      justify-content: space-between;
      position: relative;
      .item{
        display:inline-block;
        font-size:28rpx;
        color:#999;
        position: relative;
        &.active{
          color:#333;
        }
      }
      .division{
        height: 28rpx;
        width: 1px;
        display: inline-block;
        background: #e6e6e6;
      }
      .more{
        position: absolute;
        padding:10rpx;
        top: 40rpx;
        right: -100%;
        width:calc((100vw - 100rpx) / 4);
        transition: right .5s;
        background: #fff;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
        z-index:10000;
        &.show{
          right:0
        }
        .item{
          font-size: 28rpx;
          color: #999;
          height: 60rpx;
          line-height: 60rpx;
          text-align: center;
          display: block;
          & + .item{
            border-top: 1px solid #e6e6e6;
          }
        }
      }
    }
  }
</style>
