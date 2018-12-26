<template>
  <div>
    <common-loading></common-loading>
    <web-view v-if="url" :src="url"></web-view>
  </div>
</template>
<script>
  import store from '@/status/store'
  import CommonLoading from '@/components/common-loading'
  export default {
    data () {
      return {
        url: null,
        tep: null
      }
    },
    components: {
      CommonLoading
    },
    onLoad (options) {
      store.commit('showLoading')
      if (options.url) {
        this.tep = options.url ? options.url : store.state.url
      }
    },
    onShow () {
      setTimeout(() => {
        store.commit('hideLoading')
        this.url = this.tep
      }, 3000)
    }
  }
</script>

