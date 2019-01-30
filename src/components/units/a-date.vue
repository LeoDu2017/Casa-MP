<template>
  <div class="date">
    <span class="day">{{day}}</span>/
    <span class="month">{{month}}月</span>/
    <span class="year">{{year}}年</span>
  </div>
</template>

<script>
  export default {
    props: ['date'],
    computed: {
      year () {
        return this.date.split('-')[0]
      },
      month () {
        return this.date.split('-')[1]
      },
      day () {
        return this.date.split('-')[2]
      }
    }
  }
</script>

<style scoped lang="less">
  .date{
    line-height: 28px;
    color: #d5d5d5;
    font-size: 12px;
    .day{
      font-size: 18px;
      font-weight: 600;
    }
  }
</style>
