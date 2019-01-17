<template>
  <ul class="tabs">
    <li class="item" @click="onSelect(0)" :class="{'active': selected === 0}">
      <span class="text">{{class_name}}</span>
      <i class="iconfont" :class="0 === selected ? 'icon-sanjiao_up' : 'icon-sanjiao_xia'"></i>
    </li>
    <li class="item" @click="onSelect(1)" :class="{'active': 1 === selected}">
      <span class="text">{{cty_name_cn}}</span>
      <i class="iconfont" :class="1 === selected ? 'icon-sanjiao_up' : 'icon-sanjiao_xia'"></i>
    </li>
    <li class="item" @click="onSelect(2)" :class="{'active': 2 === selected}">
      <span class="text">{{brand_en_name}}</span>
      <i class="iconfont" :class="2 === selected ? 'icon-sanjiao_up' : 'icon-sanjiao_xia'"></i>
    </li>
  </ul>
</template>
<script>
  import Bus from '@/utils/eventBus'
  export default {
    data () {
      return {
        selected: -1,
        class_name: '功能',
        cty_name_cn: '国家',
        brand_en_name: '品牌'
      }
    },
    props: ['list', 'selected'],
    mounted () {
      Bus.$on(['getTitle', 'getSelected'], res => Object.assign(this, res))
    },
    methods: {
      onSelect (index) {
        const i = this.selected === index ? -1 : index
        Bus.$emit('getSelected', {selected: i})
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
