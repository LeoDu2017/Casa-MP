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
          <scroll-view
            :scroll-with-animation="true"
            scroll-y
            class="cate_wrap"
            scroll-y>
            <ul class="_list">
              <li class="_item"
                  :class="{selected: class_c_id === 0}"
                  @click.stop="onFilter(0, {class_c_id: 0, class_name: '功能', class_seo_name:''})">
                <span class="text">全部</span>
                <i class="iconfont icon-duihao"></i>
              </li>
              <li
                class="_item"
                v-for="(category, index) in categories"
                @click.stop="onFilter(0, category)"
                :class="{selected: class_c_id === category.class_c_id}"
                :key="index">
                  <span class="text">
                    {{category.class_name}}
                  </span>
                <i class="iconfont icon-duihao"></i>
              </li>
            </ul>
          </scroll-view>
          <div class="footer">
            ...
          </div>
        </swiper-item>
        <swiper-item>
          国家
        </swiper-item>
        <swiper-item>
          品牌
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        class_c_id: 0,
        class_seo_name: null,
        categories: null,
        origins: null
      }
    },
    props: ['selected', 'filters'],
    watch: {
      filters () {
        const {origin, category, ...rest} = this.filters
        Object.assign(this, {origins: origin, categories: category, ...rest})
      }
    },
    methods: {
      onClose () {
        this.$emit('close')
      },
      onChange ({target: {current}}) {
        this.$emit('onchange', current)
      },
      onFilter (type, data) {
        if (type === 0) {
          Object.assign(this, data)
        }
        const {brand, origin} = this
        this.$emit('filter', brand, this.class_seo_name, origin, this.class_name)
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
      height: 202px;
      background: #fff;
      ._swiper{
        width: 100vw;
        height: 202px;
        .cate_wrap{
          height: 170px;
          ._list{
            padding: 0 15px;
            ._item{
              border-bottom: 1px solid #E6E6E6;
              height: 50px;
              box-sizing: border-box;
              color: #666;
              font-size: 14px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .iconfont{
                font-size: 0;
                transition: all .3s;
              }
              &.selected{
                color: #212223;
                .iconfont{
                  font-size: 16px;
                }
              }
              &:last-child{
                border-bottom: none;
              }
            }
          }
        }
        .footer{
          /*border-top: 1px solid #E6E6E6;*/
          text-align: center;
        }
      }
    }
  }
</style>
