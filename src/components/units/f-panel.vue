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
          <!--@filter="onFilter"-->
          <p-category v-bind="$attrs" v-on="$listeners" :categories="type ? category : brandClassList" />
        </swiper-item>
        <swiper-item>
          <p-origin v-bind="$attrs" v-on="$listeners" :origins="type ? origin : countryList"></p-origin>
        </swiper-item>
        <swiper-item>
          <p-brand v-if="type" v-bind="$attrs" v-on="$listeners" :brands="brand_list.brand"></p-brand>
          <p-category v-else v-bind="$attrs" v-on="$listeners" :classType="1" :categories="classList" />
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
        categorie: null,
        origin: null,
        countryList: null,
        brandClassList: null,
        classList: null,
        brand_list: {
          brand: null
        }
      }
    },
    mounted () {
      Bus.$on('getSelected', res => Object.assign(this, res))
    },
    props: ['filters', 'type'],
    components: {
      PCategory,
      POrigin,
      PBrand,
      PStyle
    },
    watch: {
      filters () {
        console.log(this.filters)
        Object.assign(this, this.filters)
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
