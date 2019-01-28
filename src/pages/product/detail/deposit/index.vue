<template>
  <div class="quotation">
    <div class="infoBox">
      <h1 class="_title">确认订单信息</h1>
      <ul class="_list">
        <li class="_item">
          <img class="_img" :src="prod_image" />
          <span class="_text">{{prod_name}}</span>
        </li>
        <li class="_item" v-if="act_attr.length || attr.length">
          <block v-for="(item, index) in act_attr" :key="index"  v-if="item.attr_name !='' && item.option_name !=''">
            <span class="_key">{{item.attr_name}}：</span>
            <span class="_value">{{item.option_name}}</span>
            <span class="_divide" v-if="index+1 !== attr.lenght">|</span>
          </block>
          <block v-for="(item, index) in attr" :key="index" v-if="item.attr_name && item.option_name">
            <span class="_key">{{item.attr_item}}：</span>
            <span class="_value">{{item.attr_cont}}</span>
            <span class="_divide" v-if="index+1 !== attr.lenght">|</span>
          </block>
        </li>
        <li class="_item">
          <span class="_key">产品单价：</span><span class="_value">￥{{act_price}}</span>
        </li>
        <li class="_item">
          <span class="_key">产品数量：</span><span class="_value">{{buy_num || 1}}</span>
        </li>
        <li class="_item">
          <span class="_key">总价：</span><span class="_value">￥{{act_price * (buy_num|| 1)}}</span>
        </li>
      </ul>
    </div>
    <common-division :height="15"></common-division>
    <div class="infoBox">
      <h1 class="_title">联系方式</h1>
      <ul class="_list">
        <li class="_item">
          <label for="csr_name" class="_key _len">姓名：</label>
          <input
            class="_input"
            id="csr_name"
            :value="csr_name"
            placeholder-style="color:#CCCCCC"
            placeholder="请输入您的姓名"
            type="text"
            autofocus
            @input="onName"/>
        </li>
        <li class="_item">
          <label for="csr_mobile" class="_key _len">手机号码：</label>
          <input
            class="_input" :value="csr_mobile"
            id="csr_mobile"
            placeholder-style="color:#CCCCCC"
            placeholder="请输入您的手机号"
            maxlength="11" type="number"
            @blur="onPhone"/>
        </li>
      </ul>
    </div>
    <common-division :height="15"></common-division>

    <div class="infoBox">
      <h1 class="_title">支付方式</h1>
      <ul class="_list">
        <li class="_item">
          <checkbox-group @change="checkboxChange">
            <label class="checkbox">
              <checkbox value="1" checked="true"></checkbox>
              <img class="pay_logo" :src="payLogo" />
            </label>
          </checkbox-group>
        </li>
      </ul>
    </div>
    <common-division :height="15"></common-division>
    <div class="pay_group">
      <span class="money">{{amount_type ? '订单金额' : '预定金'}}：</span>
      <span class="amount">￥{{amount}}</span>
      <div type="view" class="_btn" @click='onPay'>立即支付</div>
    </div>
  </div>
</template>

<script>
  import store from '@/status/store.js'
  import payLogo from '@/imgs/wepay.png'
  import CommonDivision from '@/components/common-division.vue'
  export default {
    data () {
      return {
        payLogo,
        prod_id: null,
        csr_name: null,
        csr_mobile: null,
        act_price: null,
        prod_image: null,
        buy_num: 1,
        total: null,
        act_attr: [],
        attr: [],
        open_id: null,
        home_id: null,
        out_trade_no: null,
        amount: null,
        amount_type: 0,
        prod_name: null
      }
    },
    computed: {
      serverSide () {
        return store.state.serverSide
      },
      token () {
        return store.state.token
      }
    },
    onLoad ({prod_id}) {
      const {token, serverSide} = this
      wx.request({
        url: `${serverSide}/wxapi/product/payDeposit`,
        method: 'GET',
        data: {prod_id, token},
        header: {'Accept': 'application/json'},
        success: ({data: {status, data: {order_sn, prod_info, user}}}) => {
          if (status === -14) {
            wx.navigateTo({
              url: `/pages/ucenter/login/main?id=${prod_id}`
            })
          }
          status && Object.assign(this, {order_sn, prod_id}, prod_info, user)
        }
      })
    },
    methods: {
      onName (e) {
        this.csr_name = e.detail.value
      },
      onPhone (e) {
        let phone = e.detail.value
        if (!(/^1[34578]\d{9}$/.test(phone))) {
          wx.showToast({
            title: '请输入正确的手机号码',
            duration: 2000,
            icon: 'none'
          })
          this.csr_mobile = null
        } else {
          this.csr_mobile = e.detail.value
        }
      },
      onPay () {
        const {serverSide, prod_id, home_id, csr_name, open_id, csr_mobile, out_trade_no, token} = this
        if (!csr_name || !csr_mobile) {
          wx.showToast({
            title: '信息填写不完整',
            icon: 'none',
            duration: 2000
          })
          return
        }
        wx.request({
          url: `${serverSide}/wxapi/wxpay/pay`,
          method: 'POST',
          data: {prod_id, home_id, name: csr_name, mobile: csr_mobile, out_trade_no, token, open_id},
          header: {'Accept': 'application/json'},
          success: ({data: {status, data, data: {nonceStr, paySign, signType, timeStamp}}}) => {
            status && wx.requestPayment({
              timeStamp,
              nonceStr,
              package: data.package,
              signType,
              paySign,
              success (res) {
                wx.showModal({
                  title: '提示',
                  content: '支付成功',
                  success (m) {
                    if (m.confirm) {
                      wx.navigateTo({
                        url: '/pages/ucenter/account/orderList/main'
                      })
                    } else if (res.cancel) {
                      wx.navigateBack()
                    }
                  }
                })
              },
              fail (res) {
                wx.showModal({
                  title: '提示',
                  content: '支付失败',
                  success (m) {
                    if (m.confirm) {
                      wx.navigateBack()
                    } else if (res.cancel) {
                      wx.navigateBack()
                    }
                  }
                })
              }
            })
          }
        })
      }
    },
    components: {
      CommonDivision
    }
  }
</script>

<style scoped lang="less">
  .quotation{

  }
  .quotation .infoBox ._title{
    text-align: left;
    font-size: 16px;
    color: #4c4c4c;
    border-bottom: 1px solid #e5e5e5;
    height: 40px;
    line-height: 40px;
    padding:0 15px;
  }
  .quotation .infoBox ._list{
    padding: 15px;
  }
  .quotation .infoBox ._list ._item{
    display:flex;
    align-items: center;
    padding: 5px 0;
  }
  .quotation .infoBox ._list ._item ._img{
    width: 96px;
    height: 56px;
  }
  .quotation .infoBox ._list ._item .pay_logo{
    height: 28px;
  }
  .quotation .infoBox ._list ._item ._img + ._text{
    padding-left: 10px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-size: 14px;
    color: #666666;
  }
  .quotation .infoBox ._list ._item ._key,
  .quotation .infoBox ._list ._item ._value{
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-size: 14px;
    color: #666666;
  }
  .quotation .infoBox ._list ._item ._divide{
    padding-left: 5px;
    padding-right: 5px;
  }
  ._blank{
    height: 15px;
    background: #fafafa
  }

  .checkbox{
    display: flex;
    align-items: center;
  }
  .checkbox .pay_logo{
    height: 28px;
    width: 100px;
    margin-left: 15px;
  }
  .pay_group{
    display: flex;
    justify-content: flex-end;
    padding: 15px;
    align-items: center;
  }
  .pay_group ._btn{
    display: inline-block;
    width: 120px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: #212224;
    color: #fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    cursor: pointer;
    margin-left: 15px;
  }
  ._input{
    width: 180px;
    height: 36px;
    line-height: 36px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding: 0 14px;
    font-size: 14px;
  }
  ._len{
    width: 70px;
  }

</style>
