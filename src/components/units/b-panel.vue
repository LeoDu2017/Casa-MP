<template>
  <div class="panel"
       @click="onClose"
       :class="{show: selected !== -1}">
    <div class="_wrap">
      <swiper
        :current="selected"
        duration="300"
        class="_swiper"
        @change="onChange">
        <swiper-item>
          <m-category v-bind="$attrs" v-on="$listeners" :categories="classBList" />
        </swiper-item>
        <swiper-item>
          <m-class v-bind="$attrs"  v-on="$listeners" :categories="classCList" />
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
  import Bus from '@/utils/eventBus'
  import MCategory from './m-category.vue'
  import MClass from './m-class.vue'
  export default {
    data () {
      return {
        selected: -1
      }
    },
    mounted () {
      Bus.$on('getSelected', res => Object.assign(this, res))
    },
    props: ['classBList', 'classCList'],
    components: {
      MCategory,
      MClass
    },
    watch: {
      FS: {
        handler (val, oldVal) {
          console.log('B-panel', val)
          Object.assign(this, val)
        },
        deep: true
      }
    },
    methods: {
      onClose () {
        Bus.$emit('getSelected', {selected: -1})
      },
      onChange ({target: {current}}) {
        Bus.$emit('getSelected', {selected: current})
      }
    }
  }
</script>

<style scoped lang="less">
  .panel{
    position: absolute;
    top: 40px;
    height: 0;
    width: 100vw;
    background: rgba(0,0,0,.5);
    transition: height 1s;
    z-index: 100;
    overflow: hidden;
    &.show{
      height: calc(100vh - 100px);
    }
    ._wrap{
      width: 100vw;
      height: calc(100vh - 100px);
      background: #fff;
      ._swiper{
        width: 100vw;
        height: calc(100vh - 100px);
      }
    }
  }
</style>
