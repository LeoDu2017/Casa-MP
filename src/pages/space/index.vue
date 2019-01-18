<template>
  <div class="space">
    <div class="infoBox">
      <div class="_header">{{space_name}}</div>
      <div class="_content">{{space_intro}}</div>
      <div class="_imgBox">
        <img class="_img" :src="space_image" />
      </div>
    </div>
    <div class="productBox">
      <div class="_header">产品分类</div>
      <div class="product_class">
        <a v-for="(item, index) in product_class"
           :key="index"
           :url="'/pages/product/list/main?uclassb='+item.class_seo_name"
           class="_item">
          <div class="_img">
            <img class="_img" :src="item.class_icon" />
          </div>
          <div class="_title">{{item.class_name}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/status/store'
  export default {
    data () {
      return {
        uspace: null,
        space_name: null,
        space_intro: null,
        space_image: null,
        product_class: null
      }
    },
    computed: {
      serverSide () {
        return store.state.serverSide
      }
    },
    onLoad ({id}) {
      const uspace = id || 'living_room'
      Object.assign(this, {uspace})
    },
    onShow: function () {
      wx.setNavigationBarTitle({
        title: '空间'
      })
      const {serverSide, uspace} = this
      wx.request({
        url: `${serverSide}/wxapi/space/getSpaceDetail`,
        method: 'GET',
        data: {uspace},
        header: {'Accept': 'application/json'},
        success: ({data: {data}}) => Object.assign(this, data, {product_class: data.class})
      })
    }
  }
</script>

<style scoped lang="less">
  .space{
    .infoBox{
      padding: 15px;
      ._header{
        color: #333333;
        font-size: 24px;
        text-align: center;
        margin-bottom: 15px;
      }
      ._content{
        text-align: justify;
        font-size: 12px;
        color:#666666;
        line-height: 20px;
        margin-bottom: 15px;
      }
      ._imgBox{
        width: 100%;
        height: 204px;
        ._img{
          width: 100%;
          height: 204px;
        }
      }
    }
    .productBox{
      ._header{
        font-size: 19px;
        color: #333333;
        padding: 10px 30px;
        text-align: center;
        border-bottom: 1px solid #000;
        width: 90px;
        margin: 0 auto
      }
      .product_class{
        padding: 15px;
        display: flex;
        flex-wrap: wrap;
        ._item{
          width: 25%;
          text-align: center;
          padding: 4px;
          box-sizing: border-box;
          ._img{
            width:100% !important;
            height: 71px;
          }
          ._title{
            font-size:14px;
            color: #212223;
          }
        }
      }
    }
  }
</style>
