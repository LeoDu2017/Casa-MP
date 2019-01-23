<template>
  <scroll-view
    :scroll-with-animation="true"
    scroll-y
    class="cate_wrap"
    scroll-y>
    <ul class="_list">
      <li class="_item"
          :class="{selected: id === 0}"
          @click.stop="onFilter({data_id: 0, data_name: ''})">
        <span class="text">全部</span>
        <i class="iconfont icon-duihao"></i>
      </li>
      <li
        class="_item"
        v-for="(data, index) in colors"
        @click.stop="onFilter(data)"
        :class="{selected: id === data.data_id}"
        :key="index">
        <span class="text" :style="{background:data.data_name}"></span>
        <i class="iconfont icon-duihao"></i>
      </li>
    </ul>
  </scroll-view>
</template>

<script>
  import Bus from '@/utils/eventBus'
  export default {
    data () {
      return {
        id: 0
      }
    },
    props: ['colors'],
    methods: {
      onFilter (data) {
        Object.assign(this, {id: data.data_id})
        Bus.$emit('getTitle', {color_name: data.data_name})
        this.$emit('filter', {color: data.data_id})
      }
    }

  }
</script>

<style scoped lang="less">
  .cate_wrap {
    height: calc(100vh - 90px);
    ._list {
      padding: 0 15px;
      ._item {
        border-bottom: 1px solid #E6E6E6;
        height: 50px;
        box-sizing: border-box;
        color: #666;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .text{
          display: inline-block;
          height: 30px;
          width: 300px;
        }
        .iconfont {
          font-size: 0;
          transition: all .3s;
        }
        &.selected {
          color: #212223;
          .iconfont {
            font-size: 16px;
          }
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
</style>
