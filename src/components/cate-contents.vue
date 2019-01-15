<template>
  <scroll-view
    @scroll="scroll"
    :scroll-with-animation="true"
    scroll-y
    :scroll-into-view="current_cate"
    class="contents">
    <ul class="_list">
      <li class="_item" v-for="(category, index) in list" :key="index" :id="'category'+index">
        <dl class="sub_list">
          <dd
            class="sub_item"
            v-for="(item, i) in category.list"
            :key="i">
            <a
              :href="'/pages/product/list/main?uclassb='+item.class_seo_name+'&type=cate'"
              class="wrap">
              <img  class="_img" :src="item.class_icon+'@!class_icon'"/>
              <span class="name">{{item.class_name}}</span>
              <span class="num">（{{item.child_num}}）</span>
            </a>
          </dd>
          <dt class="introduction">
            {{category.introduce}}
          </dt>
        </dl>
      </li>
    </ul>
  </scroll-view>
</template>

<script>
  export default {
    props: ['list', 'current_cate'],
    methods: {
      scroll ({target: {scrollTop}}) {
        this.$emit('scroll', scrollTop)
      }
    }
  }
</script>

<style scoped lang="less">
  .contents{
    width: calc(100vw - 77px);
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    ._list{
      ._item{
        padding: 15px;
        &:last-child{
          min-height: calc(100vh - 105px);
        }
        .sub_list{
          display: flex;
          flex-wrap: wrap;
          .sub_item{
            width: 33.333333%;
            margin-bottom: 15px;
            .wrap{
              display: flex;
              flex-direction: column;
              align-items: center;
              ._img{
                width: 72.48px;
                height: 60px;
              }
              .name{
                font-size: 14px;
                color: #333;
              }
              .num{
                font-size: 11px;
                color: #999;
              }
            }
          }
          .introduction{
            font-size:12px;
            color: #666666;
            line-height:18px;
            padding-top: 14px;
            border-top:1px solid #E6E6E6;
            text-align: justify;
          }
        }
      }
    }
  }
</style>
