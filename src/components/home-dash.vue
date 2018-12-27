<template>
  <ul class="dash">
    <li class="_item" v-for="item in dash" :key="item.title">
      <span class="__title">
        {{item.title}}
      </span>
      <span class="__data">
        {{item.data}}
        <i>+</i>
      </span>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['dash']
  }
</script>

<style scoped lang="less">
  .dash {
    background: #fff;
    padding:20pt 24px 32pt 24pt;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    box-sizing: border-box;
    ._item{
      height: 40pt;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      .__title{
        font-size: 30rpx;
        color:#666;
      }
      .__data{
        color: #212224;
        font-size: 35rpx;
        display:flex;
        align-items:flex-end;
      }
    }
  }
</style>
