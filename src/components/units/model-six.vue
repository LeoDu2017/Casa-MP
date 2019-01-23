<template>
  <li class="item">
    <i
      class="iconfont"
      @click="onCollect(inspiration.id)"
      :class="inspiration.is_collect ? 'icon-xin_02' : 'icon-xin_01'">
    </i>
    <img class="img" mode="widthFix" catchtap="tapImg" :src="inspiration.org_image" />
  </li>
</template>

<script>
  export default {
    props: ['inspiration'],
    methods: {
      onCollect (id) {
        this.$emit('collect', id)
      }
    }
  }
</script>

<style scoped lang="less">
  .item{
    width: calc(50vw - 17px);
    position: relative;
    .img{
      width: 100%
    }
    .iconfont{
      position: absolute;
      top: 0;
      right: 0;
      height: 30px;
      width: 30px;
      background: rgba(0,0,0,.5);
      color: #fff;
      text-align: center;
      line-height: 30px;
    }
  }
</style>
