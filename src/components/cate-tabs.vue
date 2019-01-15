<template>
  <div class="tab">
    <ul class="_list">
      <li
        class="_item"
        v-for="(item, index) in list"
        @click="selectTab(index)"
        :class="{selected: index === selected}"
        :key="index"
        :style="{height: 1/list.length*100 + '%'}">
        <span class="_text">{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['list', 'selected'],
    methods: {
      selectTab (index) {
        this.$emit('callBack', index)
      }
    }
  }
</script>

<style scoped lang="less">
  .tab{
    width: 77px;
    height: 100%;
    overflow: hidden;
    background: #F2F2F2;
    ._list{
      height: 100%;
      ._item{
        font-size: 14px;
        color: #666;
        display: flex;
        align-items: center;
        ._text{
          display: inline-block;
          width: 100%;
          text-align: center;
        }
        &.selected{
          background: #fff;
          color: #212224;
          font-size: 16px;
          height: 16px;
          line-height: 16px;
          ._text{
            border-left:3px solid #212226;
          }
        }
      }
    }
  }
</style>
