<template>
  <div class="menu" :class="on ? 'on' : ''" @click="hideMenu">
    <div class="box">
      <search-input :go='1' type="menu"></search-input>
      <ul class="menu-list">
        <li>
          <a href="/pages/others/article/main?class_id=0">
            <i class="iconfont icon-anli"></i>
            <span>案例分享</span>
          </a>
        </li>
        <li>
          <a href="/pages/others/article/main?class_id=1">
            <i class="iconfont icon-xinwen2"></i>
            <span>新闻资讯</span>
          </a>
        </li>
        <li>
          <i class="iconfont icon-guanyuwomen"></i>
          <span>关于我们</span>
        </li>
        <li>
          <a href="/pages/others/inspiration/main">
            <i class="iconfont icon-zhaopian1"></i>
            <span>灵感库</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import SearchInput from './search-input'
  import store from '@/status/store'
  export default {
    methods: {
      hideMenu () {
        store.commit('fold')
      }
    },
    components: {
      SearchInput
    },
    computed: {
      on () {
        return store.state.on
      }
    }
  }
</script>

<style scoped lang="less">
  .menu{
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
    position:fixed;
    top: 0;
    left: -100vw;
    z-index: 100000;
    transition:left .5s;
    &.on{
      left: 0;
    }
    .box{
      height: 100vh;
      width: 70vw;
      background: #212224;
      color: #fff;
      padding: 15px;
      box-sizing: border-box;
      .menu-list{
        margin-top: 10vh;
        padding-left: 20px;
        li{
          display: flex;
          align-items: center;
          .iconfont{
            font-size: 18px;
          }
          a{
            display: flex;
            align-items: center;
          }
          span{
            font-size: 10px;
            display: inline-block;
            padding-left: 20px;
          }
          & + li{
            margin-top: 40px;
          }
        }
      }
    }
  }
</style>
