<template>
  <li class="product">
    <label class="checkbox">
      <checkbox :value="id"/>
    </label>
    <a :href="'/pages/product/detail/main?id=' + id" >
      <div class="img_wrap">
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
    props: ['product', 'min', 'del'], // delete: 是否显示删除按钮
    computed: {
      id () {
        return this.product.prod_id || this.product.id
      }
    },
    methods: {
      onDelete (id) {
        this.$emit('delete', id)
      },
      onChange (value) {
        console.log(value)
      }
    }
  }
</script>

<style scoped lang="less">
  .product{
    width: calc(50% - 2.5px);
    position: relative;
    .checkbox{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      checkbox{
        background: none;
      }
    }
    .img_wrap{
      height:113px;
      width:100%;
      position: relative;

      img{
        height:100%;
        width:100%;
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
