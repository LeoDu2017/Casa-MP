<template>
  <div class="division" :style="{height:height + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'common-division',
    props: ['height']
  }
</script>

<style scoped>
  .division{
    background: #F2F2F2;
    width: 100vw;
  }
</style>
