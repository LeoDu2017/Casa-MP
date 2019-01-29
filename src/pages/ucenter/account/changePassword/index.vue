<template>
  <div id="Sign">
    <u-title en="Change Password" cn="修改密码"></u-title>
    <div class="form_box">
      <u-input icon="icon-mima" placeholder="请输入您的原密码" :hide="hide" @callBack="setOldPassword">
        <i class="iconfont icon" :class="hide ? 'icon-biyan' : 'icon-yanjing'" @click="onSee('hide')"></i>
      </u-input>
      <u-input icon="icon-mima" placeholder="请输入您的新密码" :hide="hide01" @callBack="setNewPassword">
        <i class="iconfont icon" :class="hide01 ? 'icon-biyan' : 'icon-yanjing'" @click="onSee('hide01')"></i>
      </u-input>
      <u-input icon="icon-mima" placeholder="确认新密码" :hide="hide02" @callBack="confirmNewPassword">
        <i class="iconfont icon" :class="hide02 ? 'icon-biyan' : 'icon-yanjing'" @click="onSee('hide02')"></i>
      </u-input>
      <button class="btn" @click="onSubmit">提交</button>
    </div>
  </div>
</template>
<!--src="../../index.js"-->
<script>
  import store from '@/status/store'
  import UTitle from '@/components/units/u-title'
  import UInput from '@/components/units/u-input'
  export default {
    data () {
      return {
        hide: false,
        hide01: false,
        hide02: false,
        old_password: null,
        csr_password: null,
        confirm_pwd: null

      }
    },
    computed: {
      token () {
        return store.state.token
      },
      serverSide () {
        return store.state.serverSide
      }
    },
    components: {
      UTitle,
      UInput
    },
    methods: {
      onSee (type) {
        this[type] = !this[type]
      },
      setOldPassword (value) {
        this.old_password = value
      },
      setNewPassword (value) {
        this.csr_password = value
      },
      confirmNewPassword (value) {
        this.confirm_pwd = value
      },
      onSubmit () {
        const {serverSide, old_password, csr_password, confirm_pwd, token} = this
        wx.request({
          url: `${serverSide}/wxapi/user/editUserPwd`,
          method: 'post',
          data: {old_password, csr_password, confirm_pwd, token},
          success: ({data: {status}}) => {
            if (status === 1) {
              wx.showToast({
                title: '密码修改成功',
                icon: 'none'
              })
              setTimeout(() => wx.navigateBack(), 1000)
            } else if (status === 0) {
              wx.showModal({
                title: '提示',
                content: '暂无数据'
              })
            } else if (status === -9) {
              wx.showModal({
                title: '提示',
                content: '原密码不正确'
              })
            } else if (status === -10) {
              wx.showModal({
                title: '提示',
                content: '两次密码不正确'
              })
            } else if (status === -12) {
              wx.showModal({
                title: '提示',
                content: '新密码与旧密码不能相同'
              })
            } else if (status === -11) {
              wx.showModal({
                title: '提示',
                content: '用户输入框不能为空'
              })
            } else {
              wx.showModal({
                title: '提示',
                content: '密码修改失败，请重试'
              })
            }
          },
          fail () {
            wx.showToast({
              title: '数据请求失败，请检查网络链接',
              icon: 'none'
            })
          }
        })
      }
    }
  }
</script>
<style scoped lang="less">
  #Sign {
    .form_box{
      padding: 15px;
    }
    .icon{
      font-size: 20px;
    }
    .btn{
      border-radius:10px;
      height: 47px;
      line-height: 47px;
      width:100%;
      background-color:#333;
      font-size: 18px;
      word-break:break-all;
      text-align: center;
      color: #fff;
      margin-top: 15px;
    }
    .bottom{
      display: flex;
      justify-content: center;
      margin-top: 15px;
      font-size: 14px ;
      color: #666;
      a{
        color: #000
      }
    }
    .verify_btn{
      width: 100px;
      height: 32px;
      text-align:center;
      line-height: 32px;
      font-size:14px;
      color: #000;
      border: 1px solid #cccccc;
      border-radius: 5px;
      &:hover,&:active{
        color: #fff;
        border-color: #212226;
        background-color: #212226;
      }
    }
    .mt40{
      margin-top: 20px;
    }
    .radioSex {
      display: flex;
      label {
        margin-right: 25px;
        font-size: 24px;
      }
      radio {
        width: 60px;
      }
    }
  }
</style>
