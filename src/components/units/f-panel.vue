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
          <p-category v-bind="$attrs" v-on="$listeners" :categories="category" />
        </swiper-item>
        <swiper-item>
          <p-origin v-bind="$attrs" v-on="$listeners" :origins="origin"></p-origin>
        </swiper-item>
        <swiper-item>
          <p-brand v-bind="$attrs" v-on="$listeners" :brands="brand_list.brand"></p-brand>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
  import Bus from '@/utils/eventBus'
  import PStyle from './p-style.vue'
  import PCategory from './p-category.vue'
  import POrigin from './p-origin.vue'
  import PBrand from './p-brand.vue'
  export default {
    data () {
      return {
        selected: -1,
        origin: null,
        countryList: null,
        brandClassList: null,
        category: null,
        brand_list: {
          brand: null
        }
      }
    },
    mounted () {
      Bus.$on('getSelected', res => Object.assign(this, res))
    },
    props: ['filters'],
    components: {
      PCategory,
      POrigin,
      PBrand,
      PStyle
    },
    watch: {
      filters: {
        handler (val, oldVal) {
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
