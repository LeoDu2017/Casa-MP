<template>
  <div class="tab">
    <ul class="_list">
      <li class="_item" v-for="(item, index) in list" :key="index">
        <span>{{item.class_name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['list']
  }
</script>

<style scoped lang="less">
  .tab{
    width: 77px;
    height: 100vh;
    overflow: hidden;
    background: #F2F2F2;
    ._list{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      ._item{
        font-size: 14px;
        color: #666;
        display: flex;
        align-items: center;
        &.selected{
          background: #fff;
          color: #212224;
          font-size: 16px;
        }
      }
    }
  }
</style>
