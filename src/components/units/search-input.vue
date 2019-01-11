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
      clearInput () {
        this.searchValue = null
        this.$emit('searchCallBack', null)
      }
    }
  }
</script>

<style scoped lang="less">
  .search{
    height: 30px;
    border-radius: 15px;
    padding: 7.5px 7px;
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
      font-size: 15px;
      display:inline-block;
    }
    .searchInput{
      font-size: 12px;
      display:inline-block;
      margin-left: 7px;
    }
    .icon-cha{
      display: flex;
      height:20px;
      width:20px;
      border-radius: 50%;
      background:#666;
      color:#fff;
      font-size: 9px;
      box-sizing: border-box;
      position:absolute;
      right: 7px;
      align-items: center;
      justify-content: center;
    }
  }
</style>
