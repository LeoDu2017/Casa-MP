<template>
  <ul class="list">
    <li class="item"
        v-for="(item, index) in list"
        :key="index">
      <a :href="'details/main?article_id='+item.id">
        <div class="left">
          <img class="img" :src="item.article_img" />
        </div>
        <div class="right">
          <h1 class="title">{{item.article_name}}</h1>
          <div class="bottm">
            <a-date :date="item.article_date"></a-date>
            <p class="tags">
              <i class="iconfont icon-biaoqian"></i>
              <span class="text">{{item.article_tag}}</span>
            </p>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
  import ADate from './units/a-date'
  export default {
    props: ['list'],
    components: {
      ADate
    }
  }
</script>

<style scoped lang="less">
  .item{
    padding:15px;

    a{
      display: flex;
      .left{
        flex-basis: 168px;
        height: 105px;
        .img{
          width: 168px;
          height: 105px;
        }
      }
      .right{
        flex: 1;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title{
          font-size: 14px;
          line-height: 20px;
          color: #333333;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-all;
        }
        .tags{
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          word-break: break-all;
          display: flex;
          align-items: baseline;
          .text{
            font-size: 14px;
            margin-left: 10px;
          }
        }
      }
    }
  }
</style>
