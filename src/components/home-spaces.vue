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
    height: 30px;
    overflow: hidden;
    padding: 0 15px;
    box-sizing: border-box;
    background: #fff;
    white-space: nowrap;
  }
  .item_list{
    padding:0 20px;
    height: 30px;
    line-height:30px;
    display: inline-block;
    font-size: 14px;
  }
  .item_list:nth-child(1){
    padding-left: 0;
  }
</style>
