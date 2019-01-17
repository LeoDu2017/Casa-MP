<template>
  <scroll-view
    :scroll-with-animation="true"
    scroll-y
    class="origin_wrap"
    scroll-y>
    <dl class="_list">
      <dd class="_item"
          style="padding:0 15px"
          :class="{selected: origin_id === 0}"
          @click.stop="onFilter({origin_id: 0, cty_name_cn: '国家', cty_name_ab:''})">
        <span class="text">全部</span>
        <i class="iconfont icon-duihao"></i>
      </dd>
      <block v-for="(origin, index) in origins" :key="index">
        <dt class="letter">{{origin.latter}}</dt>
        <dl class="_sublist">
          <dd class="_item"
              v-for="(item, i) in origin.latter_arr"
              :key="i"
              @click.stop="onFilter(item)"
              :class="{selected: origin_id === item.origin_id}">
            <span class="text">{{item.cty_name_cn}}</span>
            <i class="iconfont icon-duihao"></i>
          </dd>
        </dl>
      </block>
    </dl>
  </scroll-view>
</template>

<script>
  import Bus from '@/utils/eventBus'
  export default {
    data () {
      return {
        origin_id: 0
      }
    },
    props: ['origins'],
    methods: {
      onFilter (origin) {
        this.origin_id = origin.origin_id
        Bus.$emit('getTitle', {cty_name_cn: origin.cty_name_cn})
        this.$emit('filter', {cty_name_ab: origin.cty_name_ab})
      }
    }
  }
</script>

<style scoped lang="less">
  .origin_wrap{
    width: 100vw;
    height: 202px;
    ._item{
      height: 50px;
      box-sizing: border-box;
      color: #666;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & + ._item{
        border-top: 1px solid #E6E6E6;
      }
      .iconfont{
        font-size: 0;
        transition: all .3s;
      }
      &.selected{
        color: #212223;
        .iconfont{
          font-size: 16px;
        }
      }
    }
    ._list{
      /*padding: 0 15px;*/
      .letter,
      ._sublist{
        padding: 0 15px;

      }
      .letter{
        background: #F2F2F2;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: #666;
      }
    }
  }
</style>
