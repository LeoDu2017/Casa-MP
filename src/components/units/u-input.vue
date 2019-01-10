<template>
  <div id="Input">
    <label class="label">
      <i class="iconfont" :class="icon"></i>
      <input
        v-if="hide"
        type="password"
        v-model="input_value"
        :placeholder="placeholder"/>
      <input
        v-else
        type="text"
        v-model="input_value"
        :placeholder="placeholder"/>
    </label>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        input_value: ''
      }
    },
    props: ['icon', 'placeholder', 'hide'],
    watch: {
      input_value (val) {
        this.$emit('callBack', val)
      }
    }
  }
</script>
<style scoped lang="less">
  #Input {
    display: flex;
    border-bottom: 1px solid #cccccc;
    height: 54px;
    line-height:54px;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    .label{
      display: flex;
      align-items: center;
    }
    .iconfont{
      margin-right: 12px;
      font-size: 16px;
    }
    .icon-mima, .icon{
      font-size: 20px !important;
    }
  }
</style>
