<template>
  <div class="filter">
    <ul class="tabs">
      <li class="item"
        @click="select(0)"
        :class="{active: 0 === selected}">
        <span class="text">{{cate_title}}</span>
        <i class="iconfont" :class="0 === selected ? 'icon-sanjiao_up' : 'icon-sanjiao_xia'"></i>
      </li>
      <li class="item"
          @click="select(1)"
          :class="{active: 1 === selected}">
        <span class="text">{{cate_title}}</span>
        <i class="iconfont" :class="1 === selected ? 'icon-sanjiao_up' : 'icon-sanjiao_xia'"></i>
      </li>
      <li class="item"
          @click="select(2)"
          :class="{active: 2 === selected}">
        <span class="text">{{brand_title}}</span>
        <i class="iconfont" :class="2 === selected ? 'icon-sanjiao_up' : 'icon-sanjiao_xia'"></i>
      </li>
    </ul>
    <div class="_panel"></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        selected: -1,
        cate_title: '功能',
        country_title: '国家',
        brand_title: '品牌'
      }
    },
    props: ['filters'],
    methods: {
      select (index) {
        this.selected = index === this.selected ? -1 : index
      },
      categories () {
        const {category, ...rest} = this.filters
        console.log(rest)
        return category
      }
    }
  }
</script>
<style scoped lang="less">
  .filter{
    width: 100vw;
    height: 40px;
    position: relative;
    .tabs{
      height: 40px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #E6E6E6;
      box-sizing: border-box;
      background: #fff;
      .item{
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #666666;
        width: 33.333333%;
        cursor: pointer;
        &.active{
          color: #212223;
        }
        .text{
          font-size: 14px;
          margin-right: 5px;
        }
        .iconfont{
          font-size: 14px;
        }
      }
    }
  }
</style>
