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
          <c-style v-bind="$attrs" v-on="$listeners" :categories="brandClassList" />
        </swiper-item>
        <swiper-item>
          <p-origin v-bind="$attrs" v-on="$listeners" :origins="countryList"></p-origin>
        </swiper-item>
        <swiper-item>
          <c-category v-bind="$attrs" v-on="$listeners" :classType="1" :categories="classList" />
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
  import Bus from '@/utils/eventBus'
  import CCategory from './c-category.vue'
  import CStyle from './c-style.vue'
  import POrigin from './p-origin.vue'
  export default {
    data () {
      return {
        selected: -1,
        countryList: null,
        brandClassList: null,
        classList: null
      }
    },
    mounted () {
      Bus.$on('getSelected', res => Object.assign(this, res))
    },
    props: ['filters'],
    components: {
      CStyle,
      POrigin,
      CCategory
    },
    watch: {
      filters: {
        handler (val, oldVal) {
          console.log('C-panel', val)
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
      height: calc(100vh - 90px);
    }
    ._wrap{
      width: 100vw;
      height: calc(100vh - 90px);
      background: #fff;
      ._swiper{
        width: 100vw;
        height: calc(100vh - 90px);
      }
    }
  }
</style>
