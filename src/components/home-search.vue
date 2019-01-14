<template>
  <div class="searchBox" :class="on ? 'reverse' : ''">
    <div class="_left" v-show="!on">
      <label>
        <input/>
      </label>
      <search-input :go='1' type="home"></search-input>
    </div>
    <div class="_right">
      <i class="iconfont icon-daohang" @click="showMenu"></i>
    </div>
  </div>
</template>

<script>
  import SearchInput from './units/search-input'
  export default {
    methods: {
      showMenu () {
        this.$emit('menuToggle', true)
      }
    },
    props: ['on', 'go'],
    components: {
      SearchInput
    },
    computed: {
      closed () {
        // console.log(this.on)
        return true
      }
    }
  }
</script>

<style scoped lang="less">
  .searchBox{
    width: 100%;
    height: 50px;
    padding:20px 15px;
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
