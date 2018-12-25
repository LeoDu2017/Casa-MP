<template>
  <div>
    <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <common-search :text="(index + 1) + ' . ' + log"></common-search>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import CommonSearch from '@/components/common-search'

export default {
  components: {
    CommonSearch
  },

  data () {
    return {
      logs: []
    }
  },

  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
