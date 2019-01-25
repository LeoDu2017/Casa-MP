<template>
  <div class="see">
    <div class="wrap">
      <d-title title="报价需求，一键送达" subTitle="意大利之家为您奉上心动家具价格"></d-title>
      <d-input
        icon="icon-zhanghu"
        height="40"
        :value="phone"
        placeholder="请输入您的手机号"
        @callBack="setPhone"
        maxlength="11">
      </d-input>
      <d-input
        icon="icon-xiangmuxuqiu"
        height="100"
        @callBack="setRemark"
        placeholder="请告诉我们您的需求"
        maxlength="100">
      </d-input>
      <button class="btn" @click="onSubmit">立即提交</button>
    </div>
    <common-division height="15"></common-division>
    <div class="wrap">
      <div class="totalBox">
        已选
        <span class="number">
          {{ids.length}}
        </span>
        种产品
      </div>
      <product-list :ids="ids" />
    </div>
  </div>
</template>
<script>
  import store from '@/status/store.js'
  import DTitle from '@/components/units/d-title.vue'
  import DInput from '@/components/units/d-input.vue'
  import ProductList from '@/components/product-list'
  import CommonDivision from '@/components/common-division.vue'
  export default {
    data () {
      return {
        phone: null,
        remark: null,
        type: 1,
        ids: []
      }
    },
    computed: {
      serverSide () {
        return store.state.serverSide
      },
      phone () {
        return store.state.phone
      },
      token () {
        return store.state.token
      }
    },
    onLoad ({id}) {
      this.ids = id.split(',')
    },
    components: {
      DTitle,
      DInput,
      ProductList,
      CommonDivision
    },
    methods: {
      setPhone (val) {
        this.phone = val
      },
      setRemark (val) {
        this.remark = val
      },
      onSubmit () {
        const {serverSide, token, type, remark, phone, ids} = this
        console.log(phone)
        wx.request({
          url: `${serverSide}/wxapi/product/addQuoteApplyProd`,
          method: 'post',
          data: {
            prod_id: ids.join(','),
            remark,
            customer_phone: phone,
            type,
            token
          },
          header: {'Accept': 'application/json'},
          success ({data: {status, info}}) {
            wx.showToast({
              title: info,
              icon: 'none',
              duration: 1000,
              success () {
                status === 1 && setTimeout(() => {
                  wx.navigateBack({ changed: true })
                }, 2000)
              }
            })
          }
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .see{
    .wrap{
      padding: 15px;
      .btn{
        border-radius:4px;
        height: 47px;
        line-height: 47px;
        width:100%;
        background-color:#333;
        font-size: 18px;
        word-break:break-all;
        text-align: center;
        color: #fff;
        margin-top: 20px;
      }
      .totalBox{
        display: flex;
        font-size: 14px;
        color:#999;
        margin-bottom: 12px;
        .number{
          color:#333;
        }
      }
    }
  }
</style>
