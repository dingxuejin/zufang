// pages/shaoma/shoama.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aaa:"扫码"
  
  },
shaoma:function(){
  // wx.scanCode({
  //   success: (res) => {
  //     console.log(res)
  //   }
  // })

  // 只允许从相机扫码
  wx.scanCode({
    onlyFromCamera: true,
    success: (res) => {
      console.log(res)
      this.setData({
        aaa:"扫码成功"
      })
    }
  })
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