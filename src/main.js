import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: [
      'pages/web/main',
      'pages/logs/main',
      'pages/index/main',
      'pages/search/main',
      'pages/counter/main',
      'pages/ucenter/sign/main',
      'pages/ucenter/login/main',
      'pages/ucenter/forget/main',
      'pages/product/detail/main',
      '^pages/ucenter/account/main',
      'pages/ucenter/information/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '有容-意大利之家',
      navigationBarTextStyle: 'black'
    }
  }
}
