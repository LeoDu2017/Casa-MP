<template>
  <div class="caseBox" :id="'detail_'+len">
    <modular-title :title="真实案例"></modular-title>

    <!--<div class="case_box">-->
      <!--<a  class="_item" v-for="(item,index) in article"-->
          <!--:key="index"-->
          <!--:href=`/pages/article/articleDetail/articleDetail?article_id=${item.id}`>-->
        <!--<div class="_left">-->
          <!--<img :src="item.article_img" class="_img"/>-->
        <!--</div>-->
        <!--<div class="_right">-->
          <!--<div class="title">{{item.article_name}}</div>-->
          <!--&lt;!&ndash;<formatTime date="{{item.article_date}}"></formatTime>&ndash;&gt;-->

          <!--<div class="tag">-->
            <!--<i class="iconfont icon-biaoqian"></i>-->
            <!--{{item.article_option_name}}-->
          <!--</div>-->
        <!--</div>-->

      <!--</a>-->
    <!--</div>-->
  </div>
</template>
<script>
  import ModularTitle from './modular-title'
  export default {
    props: ['len', 'article'],
    components: {
      ModularTitle
    }
  }
</script>
<style scoped lang="less">

</style>
