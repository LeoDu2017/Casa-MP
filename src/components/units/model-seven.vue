<template>
  <li class="inspiration">
    <div class="img_wrap">
      <i class="iconfont icon-web-icon-" @click.stop="onDelete(inspiration.original_id)"></i>
      <img :src="inspiration.org_image" />
    </div>
    <div class="_bottom">
      <p class="time">
        {{inspiration.add_date }}
        {{inspiration.add_time}}
      </p>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['inspiration'],
    methods: {
      onDelete (id) {
        this.$emit('delete', id)
      }
    }
  }
</script>

<style scoped lang="less">
  .inspiration{
    width: calc(50% - 2.5px);
    .img_wrap{
      height:113px;
      width:100%;
      position: relative;
      img{
        height:100%;
        width:100%;
      }
      .iconfont{
        position: absolute;
        height: 27px;
        width: 27px;
        background: rgba(0,0,0,.5);
        color: #fff;
        right: 0;
        line-height: 27px;
        font-size: 21px;
        text-align: center;
      }
    }
    ._bottom{
      padding:10px 0;
      p{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-all;
        font-size: 14px;
        color:#333;
        &.min{
          font-size: 12px;
          color:#666
        }
        &.time{
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
</style>
