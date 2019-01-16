<template>
  <div class="filter">
    <ul class="tabs">
      <li class="item"
        @click="onSelect(0)"
        :class="{active: 0 === selected}">
        <span class="text">{{class_name}}</span>
        <i class="iconfont" :class="0 === selected ? 'icon-sanjiao_up' : 'icon-sanjiao_xia'"></i>
      </li>
      <li class="item"
          @click="onSelect(1)"
          :class="{active: 1 === selected}">
        <span class="text">{{country_title}}</span>
        <i class="iconfont" :class="1 === selected ? 'icon-sanjiao_up' : 'icon-sanjiao_xia'"></i>
      </li>
      <li class="item"
          @click="onSelect(2)"
          :class="{active: 2 === selected}">
        <span class="text">{{brand_title}}</span>
        <i class="iconfont" :class="2 === selected ? 'icon-sanjiao_up' : 'icon-sanjiao_xia'"></i>
      </li>
    </ul>
    <div class="_panel"
         @click="onClose"
         :class="{show: selected !== -1}">
      <div class="_wrap">
        <swiper :current="selected"
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
                    @click.stop="onFilter(0, {class_c_id: 0, class_name: '功能'})">
                  <span class="text">全部</span>
                  <i class="iconfont icon-duihao"></i>
                </li>
                <li
                  class="_item"
                  v-for="(category, index) in category"
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
              {{cateMore}}
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
  </div>
</template>
<script>
  export default {
    data () {
      return {
        selected: -1,
        class_c_id: 0,
        class_name: '功能',
        country_title: '国家',
        brand_title: '品牌',
        current_tab: 'tab0',
        category: null,
        cateMore: '...'
      }
    },
    props: ['filters'],
    computed: {
      // categories () {
      //   console.log(this.filters)
      //   const {category, ...rest} = this.filters
      //   console.log(rest)
      //   return category
      // }
    },
    watch: {
      filters () {
        Object.assign(this, this.filters)
      }
    },
    methods: {
      onSelect (index) {
        this.selected = index === this.selected ? -1 : index
      },
      onChange ({target: {current}}) {
        console.log(current)
        this.selected = current
      },
      onClose () {
        this.selected = -1
      },
      onFilter (type, data) {
        if (type === 0) {
          Object.assign(this, data)
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .filter{
    width: 100vw;
    height: 40px;
    position: relative;
    .tabs{
      height: 40px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #E6E6E6;
      box-sizing: border-box;
      background: #fff;
      .item{
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #666666;
        width: 33.333333%;
        cursor: pointer;
        &.active{
          color: #212223;
        }
        .text{
          font-size: 14px;
          margin-right: 5px;
        }
        .iconfont{
          font-size: 14px;
        }
      }
    }
    ._panel{
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
  }
</style>
