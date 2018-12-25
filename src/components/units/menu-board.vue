<template>
  <div class="menu" :class="on ? 'on' : ''" @click="hideMenu">
    <div class="box">
      <search-input :go='1' type="menu"></search-input>
      <ul class="menu-list">
        <li>
          <i class="iconfont icon-anli"></i>
          <span>案例分享</span>
        </li>
        <li>
          <i class="iconfont icon-xinwen2"></i>
          <span>新闻资讯</span>
        </li>
        <li>
          <i class="iconfont icon-guanyuwomen"></i>
          <span>关于我们</span>
        </li>
        <li>
          <a href="/page/inspiration/main">
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
    props: ['on'],
    methods: {
      hideMenu () {
        store.commit('fold')
      }
    },
    components: {
      SearchInput
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
      background:#212224;
      color:#fff;
      padding:15pt;
      box-sizing: border-box;
      .menu-list{
        margin-top: 10vh;
        padding-left: 20pt;
        li{
          display: flex;
          align-items: center;
          .iconfont{
            font-size: 18pt;
          }
          span{
            font-size: 10pt;
            display: inline-block;
            padding-left: 20pt;
          }
          & + li{
            margin-top: 40pt;
          }
        }
      }
    }
  }
</style>
