<template>
  <li class="product">
    <a :href="'/pages/product/detail/main?id=' + id" >
      <div class="img_wrap">
        <span class="cx_xh" :class="{show:product.is_spots}">{{product.sale_price > 0 ? '促销' : '现货'}}</span>
        <i v-if="del" @click.stop="onDelete(id)" class="iconfont icon-web-icon-"></i>
        <img :src="product.image_path" v-if="product.image_path"/>
        <img :src="product.prod_image" v-if="product.prod_image"/>
      </div>
      <div class="_bottom">
        <p v-if="product.brand_name">{{product.brand_name}}</p>
        <p v-if="product.image_head" :class="min ? 'min' : ''">{{ product.image_head }}</p>
        <p v-if="product.brand_en_name" :class="min ? 'min' : ''">{{ product.brand_en_name }}</p>
        <p v-if="product.prod_name" :class="min ? 'min' : ''">{{ product.prod_name }}</p>
        <p v-if="product.add_date && product.add_time" class="time">
          {{product.add_date }}
          {{product.add_time}}
        </p>
      </div>
    </a>
  </li>
</template>

<script>
  export default {
    name: 'model-one',
    props: ['product', 'min', 'del'], // delete: 是否显示删除按钮
    computed: {
      id () {
        return this.product.prod_id || this.product.id
      },
      crop () {
        const width = wx.getSystemInfoSync().windowWidth
        const img_width = Math.floor((width - 30) / 2 - 2.5)
        return `@113h_${img_width}w_1e_1c`
      }
    },
    methods: {
      onDelete (id) {
        this.$emit('delete', id)
      }
    }
  }
</script>

<style scoped lang="less">
  .product{
    width: calc(50% - 2.5px);
    .img_wrap{
      height:113px;
      width:100%;
      position: relative;
      overflow: hidden;
      background-color: #eee;
      color: #ccc;
      font-size: 14px;
      font-weight: bold;
      &:before{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        content: '有容-意大利之家';
        height: 10px;
        width: 100%;
        z-index: 0;
        text-align: center;
      }
      .cx_xh {
        position:absolute;
        display:none;
        background:#bf2d2f;
        color:#fff;
        text-align:center;
        box-sizing:border-box;
        transform:rotate(-45deg);
        font-size: 12px;
        letter-spacing: 2px;
        top: 10px;
        width: 77px;
        height:18px;
        left: -19px;
        z-index: 100;
        &.show{
          display:block;
        }
      }
      img{
        height:100%;
        width:100%;
        position: absolute;
        z-index: 1;
      }
      .iconfont{
        position: absolute;
        height: 27px;
        width: 27px;
        background: rgba(0,0,0,.5);
        color: #fff;
        right: 0;
        line-height: 27px;
        font-size: 21px;
        text-align: center;
      }
    }
    ._bottom{
      padding:10px 0;
      p{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-all;
        font-size: 14px;
        color:#333;
        &.min{
          font-size: 12px;
          color:#666
        }
        &.time{
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
</style>
