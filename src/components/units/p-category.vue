<template>
  <scroll-view
    :scroll-with-animation="true"
    scroll-y
    class="cate_wrap"
    scroll-y>
    <ul class="_list">
      <li class="_item"
          :class="{selected: id === 0}"
          @click.stop="onFilter({class_c_id: 0, class_name: '功能', class_seo_name:''})">
        <span class="text">全部</span>
        <i class="iconfont icon-duihao"></i>
      </li>
      <li
        class="_item"
        v-for="(data, index) in categories"
        @click.stop="onFilter(data)"
        :class="{selected: id === data.class_c_id || id === data.id}"
        :key="index">
        <span class="text">
          {{data.class_name}}
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
        id: 0
      }
    },
    props: ['categories', 'classType'],
    methods: {
      onFilter (data) {
        this.id = data.class_c_id || data.id
        const post = data.hasOwnProperty('class_url_name') ? {class_url_name: data.class_url_name} : {class_seo_name: data.class_seo_name}

        const title = this.classType ? {cate_name: data.class_name} : {class_name: data.class_name}
        Bus.$emit('getTitle', title)
        this.$emit('filter', post)
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
