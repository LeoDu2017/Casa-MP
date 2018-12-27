<template>
  <p class="date">
    <span class="day">{{getDay}}/</span>
    <span class="month">{{getMonth}}月</span>
    <span class="year">{{getYear}}年</span>
  </p>
</template>
<script>
  export default {
    props: ['date'],
    computed: {
      getDay () {
        return this.date.split('-')[2]
      },
      getMonth () {
        return this.date.split('-')[1]
      },
      getYear () {
        return this.date.split('-')[0]
      }
    }
  }
</script>
<style scoped lang="less">
  .date {
    font-size: 28rpx;
    color:#dcdcdc;
    .day{
      font-size: 30rpx;
      font-weight: bold;
    }
    .month{
      margin-right: 8pt;
    }

  }
</style>
