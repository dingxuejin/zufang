// pages/regist/regist.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
let util = require("../../utils/util.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isRegist: false,
    isYZM: false,
    uName: "",
    uPwd: '',
    secondUpwd: '',
    YZM: '',
    isShow:true
  },
  showMA() {
    let isShow = this.data.isShow;
    this.setData({
      isShow: !isShow,
    })
  },
  testName(e) {
    let res = /^[a-zA-Z0-9_-]{4,12}$/;
    let val = e.detail.value;
    let isOk = res.test(val);
    if (!isOk) {
      util.showModel('账户名格式错误', "账户名为4到16位（字母，数字，下划线，减号）")
      this.setData({
        uName: ''
      })
    } else {
      qcloud.request({
        url: config.service.requestUrl,
        data:{},
        success:function(res){
          console.log(res);
        }
      })
      this.setData({
        uName: val
      });
    }
  },
  testPwd(e) {
    let res = /^[\w]{6,15}$/;
    let val = e.detail.value;
    let isOk = res.test(val);
    if (!isOk) {
      util.showModel('密码格式错误', "格式为6-15位，只能是字母、数字和下划线")
      this.setData({
        uPwd: '',
      })
    } else {
      let secondUpwd = this.data.secondUpwd;
      this.setData({
        uPwd: val
      })
      if (secondUpwd) {
        this.testResPwd(val, secondUpwd);
      }
    }
  },
  testResPwd(val1, val2) {
    let secondUpwd = this.data.secondUpwd;
    let uPwd = this.data.uPwd;
    if (uPwd === secondUpwd) {
      this.setData({
        isRegist: true
      })
    } else {
      util.showModel('两次密码不同', "请重新输入")
      this.setData({
        isRegist: false,
      })
    }
  },
  RePwd(e) {
    let uPwd = this.data.uPwd;
    let val = e.detail.value;
    this.setData({
      secondUpwd: val
    })
    if (!uPwd) {
      util.showModel("密码格式错误", "密码不能为空 或 格式为6-15位，只能是字母、数字和下划线")
    } else {
      this.testResPwd(val, uPwd)
    }
  },
  testYZM(e) {
    let val = e.detail.value;
    this.setData({ YZM: val })
  },
  toLogin() {
    if (this.data.userName === "" || this.data.password === "") {
      this.setData({
        isRegist: false
      })
      util.showModel("账户或密码不完整", "请仔细检查")
    } else if (this.data.YZM === ""){
      this.setData({
        isRegist: false
      })
      util.showModel("验证码不能为空", "请仔细检查")
    } 
    else if (!isYZM){
      this.setData({
        isRegist: false
      })
      util.showModel("验证码不正确", "请仔细检查")
    }
    else {
      this.setData({
        isRegist: true
      })
      util.showSuccess("注册成功！");
      setTimeout(function () {
        wx.navigateTo({
          url: '../login/login'
        })
      }, 2000)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  }
})