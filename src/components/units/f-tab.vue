<template>
  <ul class="tabs">
    <li class="item" @click="onSelect(0)" :class="{'active': selected === 0}">
      <span class="text">{{class_name}}</span>
      <i class="iconfont" :class="0 === selected ? 'icon-sanjiao_up' : 'icon-sanjiao_xia'"></i>
    </li>
    <li class="item" @click="onSelect(1)" :class="{'active': 1 === selected}">
      <span class="text">{{country_title}}</span>
      <i class="iconfont" :class="1 === selected ? 'icon-sanjiao_up' : 'icon-sanjiao_xia'"></i>
    </li>
    <li class="item" @click="onSelect(2)" :class="{'active': 2 === selected}">
      <span class="text">{{brand_title}}</span>
      <i class="iconfont" :class="2 === selected ? 'icon-sanjiao_up' : 'icon-sanjiao_xia'"></i>
    </li>
  </ul>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
    props: ['list', 'selected', 'class_name', 'country_title', 'brand_title'],
    methods: {
      onSelect (index) {
        this.$emit('select', index)
      }
    }
  }
</script>
<style scoped lang="less">
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
</style>
