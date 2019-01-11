<template>
  <div class="searchBox">
    <!--v-show="!on"-->
    <!--:class="on ? 'reverse' : ''"-->
    <div class="_left">
      <search-input :go='1' type="home"></search-input>
    </div>
    <div class="_right">
      <i class="iconfont icon-daohang" @click="showMenu"></i>
    </div>
    <!--:on="on"-->
    <menu-board></menu-board>
  </div>

</template>

<script>
  import SearchInput from './units/search-input'
  import MenuBoard from './units/menu-board'
  import store from '@/status/store'

  export default {
    methods: {
      showMenu () {
        store.commit('unfold')
      }
    },
    props: ['go'],
    components: {
      SearchInput, MenuBoard
    }
  }
</script>

<style scoped lang="less">
  .searchBox{
    width: 100%;
    /*height: 50pt;*/
    padding: 10px 15px;
    box-sizing:border-box;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &.reverse{
      justify-content: flex-end;
    }
    ._left{
      flex: 1;
    }
    ._right{
      flex: 0 0 33px;
      text-align: right;
      .iconfont{
        font-size: 18px;
        color: #333;
      }
    }
  }
</style>
