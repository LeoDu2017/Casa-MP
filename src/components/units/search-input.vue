<template>
  <div class="search" :class="type" @click="goSerachPage">
    <i class="iconfont icon-sousuo"></i>
    <input
      class="searchInput"
      placeholder="请搜索"
      v-model="searchValue"
      />
    <i class="iconfont icon-cha" v-if="searchValue" @click="clearInput"></i>
  </div>
</template>

<script>
  export default {
    props: ['type', 'go'],
    data () {
      return {
        searchValue: ''
      }
    },
    // v-model="searchValue"
    // @input="showSearchItem"
    watch: {
      searchValue (val) {
        this.$emit('searchCallBack', val)
      }
    },
    methods: {
      goSerachPage (event) {
        event.stopPropagation()
        this.go && wx.navigateTo({
          url: '/pages/search/main'
        })
      },
      // showSearchItem (event) {
      //   this.searchValue = event.target.value
      //   this.$emit('searchCallBack', event.target.value)
      // },
      clearInput () {
        this.searchValue = ''
        this.$emit('searchCallBack', '')
        this.$refs.searchInput.value = ''
      }
    }
  }
</script>

<style scoped lang="less">
  .search{
    height: 30pt;
    border-radius: 15pt;
    padding:7.5pt 7pt;
    box-sizing:border-box;
    display: flex;
    align-items: center;
    color: #666;
    position:relative;
    &.home{
      background: #F5F5F5;
    }
    &.menu{
      margin-top: 15vh;
      background: #fff;
    }
    .icon-sousuo{
      font-size: 15pt;
      display:inline-block;
    }
    .searchInput{
      font-size: 12pt;
      display:inline-block;
      margin-left: 7pt;
    }
    .icon-cha{
      display: flex;
      height:20pt;
      width:20pt;
      border-radius: 50%;
      background:#666;
      color:#fff;
      font-size: 9pt;
      box-sizing: border-box;
      position:absolute;
      right: 7pt;
      /*text-align: center;*/
      /*line-height: 20pt;*/
      align-items: center;
      justify-content: center;
    }
  }
</style>
