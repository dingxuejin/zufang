// pages/detail/detail.js
let glo=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:glo.globalData.imgUrl,
    markers: [{
      iconPath: "../../image/租房子/u358.png",
      id: 0,
      latitude: 31.388150,
      longitude: 121.003410,
      width: 50,
      height: 50
    }],
    currentId:1,
    totailImg: 0,
    detail: {
      img: ["../../image/首页/u88.png", "../../image/首页/u116.png", "../../image/首页/u118.png"]
    }
  },
changeImg:function(res){
  console.log(res);
  let currentNum = res.detail.currentItemId;
  currentNum=Number(currentNum)+1;
  this.setData({currentId:currentNum})
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
    let that = this;
    let totailNum = that.data.detail.img.length;
    this.setData({ totailImg: totailNum })
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