<template>
  <scroll-view
    :scroll-with-animation="true"
    scroll-y
    class="cate_wrap"
    scroll-y>
    <ul class="_list">
      <li class="_item"
          :class="{selected: class_c_id === 0}"
          @click.stop="onFilter({class_c_id: 0, class_name: '功能', class_seo_name:''})">
        <span class="text">全部</span>
        <i class="iconfont icon-duihao"></i>
      </li>
      <li
        class="_item"
        v-for="(category, index) in categories"
        @click.stop="onFilter(category)"
        :class="{selected: class_c_id === category.class_c_id}"
        :key="index">
        <span class="text">
          {{category.class_name}}
        </span>
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
        class_c_id: 0
      }
    },
    props: ['categories'],
    methods: {
      onFilter (category) {
        this.class_c_id = category.class_c_id
        Bus.$emit('getTitle', {class_name: category.class_name})
        this.$emit('filter', {class_seo_name: category.class_seo_name})
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
