<template>
  <div class="container">
    <common-search @menuToggle="menuToggle" :on="on"></common-search>

  </div>
</template>

<script>

import CommonSearch from '@/components/common-search'

export default {
  data () {
    return {
      on: false
    }
  },

  components: {
    CommonSearch
  },

  methods: {
    menuToggle (toggle) {
      this.on = toggle
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>
