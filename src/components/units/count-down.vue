<template>
  <div class="counter-warp">
    倒计时
  </div>
</template>
<script>
  export default {
    props: ['start', 'end'],
    onShow () {
      console.log(this.start)
    }
  }
</script>
<style scoped lang="less">

</style>
