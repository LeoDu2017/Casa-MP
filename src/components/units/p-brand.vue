<template>
  <div class="brand_wrap">
    <scroll-view
      :scroll-with-animation="true"
      scroll-y
      class="brand_wrap"
      scroll-y>
      <dl class="_list">
        <dd class="_item"
            style="padding:0 15px"
            :class="{selected: id === 0}"
            @click.stop="onFilter({id: 0, brand_en_name: '品牌', brand_url_name:''})">
          <span class="text">全部</span>
          <i class="iconfont icon-duihao"></i>
        </dd>
        <block v-for="(brand, index) in brands" :key="index">
          <dt class="letter">{{brand.latter}}</dt>
          <dl class="_sublist">
            <dd class="_item"
                v-for="(item, i) in brand.latter_arr"
                :key="i"
                @click.stop="onFilter(item)"
                :class="{selected: id === item.id}">
              <span class="text">{{item.brand_en_name}}</span>
              <i class="iconfont icon-duihao"></i>
            </dd>
          </dl>
        </block>
      </dl>
    </scroll-view>
  </div>
</template>

<script>
  import Bus from '@/utils/eventBus'
  export default {
    data () {
      return {
        id: 0
      }
    },
    props: ['brands'],
    methods: {
      onFilter (brand) {
        this.id = brand.id
        Bus.$emit('getTitle', {brand_en_name: brand.brand_en_name})
        this.$emit('filter', {brand_url_name: brand.brand_url_name})
      }
    }
  }
</script>

<style scoped lang="less">
  .brand_wrap{
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
