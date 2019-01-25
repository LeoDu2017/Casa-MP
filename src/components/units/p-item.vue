<template>
  <li class="_item">
    <div class="imgBox">
      <img class="_img" :src="prod_image"/>
    </div>
    <div class="_text">
      {{prod_name}}
    </div>
  </li>
</template>

<script>
  import store from '@/status/store.js'
  export default {
    props: ['prod_id'],
    data () {
      return {
        prod_image: '',
        prod_name: ''
      }
    },
    computed: {
      phone () {
        return store.state.phone
      },
      serverSide () {
        return store.state.serverSide
      },
      token () {
        return store.state.token
      }
    },
    onLoad () {
      /* eslint camelcase: ["error", {properties: "never"}] */
      const {serverSide, token} = this
      wx.request({
        url: `${serverSide}/wxapi/product/mProdInfo`,
        method: 'GET',
        data: {prod_id: this.prod_id, token},
        header: {
          'Accept': 'application/json'
        },

        success: ({data: {status, data}}) => {
          console.log(42, data)
          this.prod_image = data.prod_info.prod_image
          this.prod_name = data.prod_info.prod_name
        }
      })
    }
  }
</script>

<style scoped lang="less">
  ._item {
    height: 60px;
    width: 100%;
    padding-bottom: 12px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    & + ._item {
      margin-top: 12px;
    }
    .imgBox {
      height: 60px;
      flex: 0 0 90px;
      ._img {
        height: 100%;
        width: 100%;
      }
    }
    ._text {
      flex: 1;
      text-align: left;
      padding-left: 12px;
      font-size: 12px;
      color: #666;
    }
  }
</style>
