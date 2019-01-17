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
  import PCategory from './p-category.vue'
  import POrigin from './p-origin.vue'
  import PBrand from './p-brand.vue'
  export default {
    data () {
      return {
        selected: -1,
        categorie: null,
        origin: null,
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
      PBrand
    },
    watch: {
      filters () {
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
      // onFilter (data) {
      //   Object.assign(this, data)
      //   this.$emit('filter', this.brand_url_name, this.class_seo_name, this.cty_name_ab)
      // }
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
      height: 202px;
      background: #fff;
      ._swiper{
        width: 100vw;
        height: 202px;

      }
    }
  }
</style>
