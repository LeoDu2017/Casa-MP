<template>
  <ul class="tabs">
    <li class="item" @click="onSelect(0)" :class="{'active': selected === 0}">
      <span class="text">{{class_name}}</span>
      <i class="iconfont" :class="0 === selected ? 'icon-sanjiao_up' : 'icon-sanjiao_xia'"></i>
    </li>
    <li class="item" @click="onSelect(1)" :class="{'active': 1 === selected}">
      <span class="text">{{cate_name}}</span>
      <i class="iconfont" :class="1 === selected ? 'icon-sanjiao_up' : 'icon-sanjiao_xia'"></i>
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
        cate_name: '分类'
      }
    },
    props: ['type'],
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
      width: 50%;
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
