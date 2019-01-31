<template>
  <ul class="dash">
    <li class="_item">
      <span class="__title">
        合作厂商
      </span>
      <span class="__data">
        {{a}}
        <i>+</i>
      </span>
    </li>
    <li class="_item">
      <span class="__title">
        在售产品
      </span>
      <span class="__data">
        {{b}}
        <i>+</i>
      </span>
    </li>
    <li class="_item">
      <span class="__title">
        全国案例
      </span>
      <span class="__data">
        {{c}}
        <i>+</i>
      </span>
    </li>
    <li class="_item">
      <span class="__title">
        全球员工
      </span>
      <span class="__data">
        {{d}}
        <i>+</i>
      </span>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['a', 'b', 'c', 'd']
  }
</script>

<style scoped lang="less">
  .dash {
    background: #fff;
    padding:20px 24px 32px 24px;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    box-sizing: border-box;
    ._item{
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      .__title{
        font-size: 15px;
        color:#666;
      }
      .__data{
        color: #212224;
        font-size: 18px;
        display:flex;
        align-items:flex-end;
      }
    }
  }
</style>
