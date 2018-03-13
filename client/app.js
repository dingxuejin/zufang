//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
  globalData:{
    imgUrl: "https://zufang-1255904542.cos-website.ap-shanghai.myqcloud.com/"
  },
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
    }
})