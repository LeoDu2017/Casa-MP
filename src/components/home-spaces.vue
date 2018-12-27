<template>
  <div class="scroll_box">
    <scroll-view class="scroll-view_x" scroll-x style="width: auto;overflow:hidden;">
      <a class="item_list" v-for="(item,index) in spaces" :key="index" :href="'/pages/space/space?id='+item.space_url_name">
        {{item.space_name}}
      </a>
    </scroll-view>
  </div>
</template>

<script>
  export default {
    name: 'common-division',
    props: ['spaces']
  }
</script>

<style scoped lang="less">
  .scroll_box{
    width: 100%;
    height: 60rpx;
    overflow: hidden;
    padding: 0 30rpx;
    box-sizing: border-box;
    background: #fff;
    white-space: nowrap;
  }
  .item_list{
    padding:0 40rpx;
    height: 60rpx;
    line-height:60rpx;
    display: inline-block;
    font-size: 28rpx;
  }
  .item_list:nth-child(1){
    padding-left: 0;
  }
</style>
