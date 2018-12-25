<template>
  <div class="searchBox" :class="on ? 'reverse' : ''">
    <div class="_left" v-show="!on">
      <search-input :go='1' type="home"></search-input>
    </div>
    <div class="_right">
      <i class="iconfont icon-daohang" @click="showMenu"></i>
    </div>
    <menu-board :on="on"></menu-board>
  </div>

</template>

<script>
  import SearchInput from './units/search-input'
  import MenuBoard from './units/menu-board'
  import store from '../status/store'

  export default {
    methods: {
      showMenu () {
        store.commit('unfold')
      }
    },
    props: ['go'],
    components: {
      SearchInput, MenuBoard
    },
    computed: {
      on () {
        return store.state.on
      }
    }
  }
</script>

<style scoped lang="less">
  .searchBox{
    width: 100%;
    height: 50pt;
    padding:20pt 15pt;
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
      flex: 0 0 33pt;
      text-align: right;
      .iconfont{
        font-size: 18pt;
        color: #333;
      }
    }
  }
</style>
