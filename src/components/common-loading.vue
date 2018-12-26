<template>
  <div class="wrap" :class="hide ? 'hide' : ''">
    <div class="loading wave">
      买进口家具，找有荣-意大利之家
    </div>
  </div>
</template>
<script>
  import store from '@/status/store'
  export default {
    computed: {
      hide () {
        return store.state.hide
      }
    }
  }
</script>
<style scoped lang="less">
  .wrap{
    position: fixed;
    top:0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: #212224;
    z-index: 100000000;
    opacity: 1;
    &.hide{
      opacity: 0;
      z-index: -100000;
    }
    transition:opacity 3s;

  }
  .loading {
    text-transform: uppercase;
    font-family: '微软雅黑', sans-serif;
    /*font-weight: bold;*/
    font-size: 16pt;
    text-align: center;
    height: 20px;
    line-height: 20px;
    vertical-align: bottom;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    display: inline-block;
    transform: translateY(-30%);
  }

  .wave {
    /*background-color: #fff;*/
    background-image: url("../imgs/wave.png");
    -moz-background-clip: text;
    -o-background-clip: text;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0px 0px rgba(255, 255, 255, 0.06);
    animation: wave-animation 1s infinite linear, loading-animation 10s infinite linear alternate;
    /*background-size: 200px 40px;*/
    background-repeat: repeat-x;
    opacity: 1;
  }

  @keyframes wave-animation {
    0% {
      background-position: 0 bottom;
    }

    100% {
      background-position: 100px bottom;
    }
  }
  @keyframes loading-animation {
    0% {
      background-size: 108px 0px;
    }

    100% {
      background-size: 108px 30px;
    }
  }



</style>
