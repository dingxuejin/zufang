// pages/zufang/zufang.js
let glo = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    woshi: {
      name: "卧室", array: ["一室", "二室", "三室", "四室", "五室"]
    },
    weishengjian: {
      name: "卫生间", array: ["一卫", "二卫", "三卫"]
    },
    quyu1: ["区域", "地铁"],
    quyu2: ["所有", "城东", "城西", "城南", "城北"],
    quyu3: ["所有"],

    jiage: { name: "价格", array: ["不限", "1000以下", "1001-2000", "2001-3000", "3001-4000", "4000以上"] },
    huxing: { name: "户型", array: ["不限", "整租", "合租"] },
    chaoxiang: { name: "朝向", array: ["朝西", "朝西", "朝西", "朝西", "朝西", "朝西"] },
    mianji: { name: "建筑面积", array: ["30平方以下", "30-60", "60-90", "90-120", "120以上"] },
    totalActive: false,
    wsjActive: -1,
    fangxingActive: -1,
    mianjiActive: -1,
    chaoxiangActive: -1,
    numActive: 0,
    ditieActive: 0,
    jiageActive: 0,
    huxingActive: 0,
    quyuActive1: 0,
    quyuActive2: 0,
    quyuActive3: 0,
    sxActive: 0,
    sx: ["区域", "价格", "房型", "更多"],
    imgUrl: glo.globalData.imgUrl,
    zufang: [
      {
        img: "image/首页/u116.png",
        dizhi: "江苏省昆山市同丰东路998号中大简介会",
        weizhi: "距离11号地铁786米",
        jiage: 3500,
        daxiao: "90",
        fang: "三室一厅",
        youshi: ["向阳", "交通便利", "近地铁"]
      },
      {
        img: "image/首页/u116.png",
        dizhi: "江苏省昆山市同丰东路998号中大简介会",
        weizhi: "距离11号地铁786米",
        jiage: 3500,
        daxiao: "90",
        fang: "三室一厅",
        youshi: ["向阳", "交通便利", "近地铁"]
      },
      {
        img: "image/首页/u116.png",
        dizhi: "江苏省昆山市同丰东路998号中大简介会",
        weizhi: "距离11号地铁786米",
        jiage: 3500,
        daxiao: "90",
        fang: "三室一厅",
        youshi: ["向阳", "交通便利", "近地铁"]
      },
      {
        img: "image/首页/u116.png",
        dizhi: "江苏省昆山市同丰东路998号中大简介会",
        weizhi: "距离11号地铁786米",
        jiage: 3500,
        daxiao: "90",
        fang: "三室一厅",
        youshi: ["向阳", "交通便利", "近地铁"]
      },
      {
        img: "image/首页/u116.png",
        dizhi: "江苏省昆山市同丰东路998号中大简介会",
        weizhi: "距离11号地铁786米",
        jiage: 3500,
        daxiao: "90",
        fang: "三室一厅",
        youshi: ["向阳", "交通便利", "近地铁"]
      },
      {
        img: "image/首页/u116.png",
        dizhi: "江苏省昆山市同丰东路998号中大简介会",
        weizhi: "距离11号地铁786米",
        jiage: 3500,
        daxiao: "90",
        fang: "三室一厅",
        youshi: ["向阳", "交通便利", "近地铁"]
      },
      {
        img: "image/首页/u116.png",
        dizhi: "江苏省昆山市同丰东路998号中大简介会",
        weizhi: "距离11号地铁786米",
        jiage: 3500,
        daxiao: "90",
        fang: "三室一厅",
        youshi: ["向阳", "交通便利", "近地铁"]
      }
    ]

  },
  toReset() {
    this.setData({
      wsjActive: -1,
      fangxingActive: -1,
      mianjiActive: -1,
      chaoxiangActive: -1,
      numActive: 0,
      ditieActive: 0,
      jiageActive: 0,
      huxingActive: 0,
      quyuActive: 0,
      sxActive: 0,
    })
  },
  toSubmit() {
    console.log("提交gd");
    this.totalActive()
  },
  totalActive() {
    let totalActive = this.data.totalActive;
    this.setData({
      totalActive: !totalActive
    })
  },
  toJiaGeRequest(e) {
    let active = e.currentTarget.dataset.num;
    this.setData({
      jiageActive: active
    })
    console.log(active);
  },
  toDiTieRequest(e) {
    let active = e.currentTarget.dataset.num;
    this.setData({
      ditieActive: active
    })
    console.log(active);
  },
  toWSJ(e) {
    let active = e.currentTarget.dataset.num;
    this.setData({
      wsjActive: active
    })
    console.log(active);
  },
  toFangxing(e) {
    let active = e.currentTarget.dataset.num;
    this.setData({
      fangxingActive: active
    })
    console.log(active);
  },
  toChaoxiang(e) {
    let active = e.currentTarget.dataset.num;
    this.setData({
      chaoxiangActive: active
    })
  },
  toMianji(e) {
    let active = e.currentTarget.dataset.num;
    this.setData({
      mianjiActive: active
    })
  },
  toHuXingRequest(e) {
    let active = e.currentTarget.dataset.num;
    this.setData({
      huxingActive: active
    })
  },
  toRequest(e) {
    let active = e.currentTarget.dataset.num;
    this.setData({
      numActive: active
    })
    console.log(active);
    // wx:wx.request({
    //   url: ,
    //   data: ,
    //   header: {},
    //   method: GET,
    //   dataType: json,
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
  },
  toSx(e) {
    let active = e.currentTarget.dataset.sx;
    this.setData({
      sxActive: active
    })
  },
<<<<<<< HEAD
  toQuyu1(e) {
    let active = e.currentTarget.dataset.quyu;
    this.setData({
      quyuActive1: active
    })
    // 以下修改成每次触发此事件时，根据quyu1的下标 quyuActive1发送网络请求，得出的结果修改quyu2与quyu3，从而达到修改二级联动与三级联动的目的
    if (active == 0) {
      this.setData({
        quyu2: ["所有", "城东", "城西", "城南", "城北"],
        quyu3: ["所有", "城东1", "城西1", "城南1", "城北1"],
      })
    } else {
      this.setData({
        quyu2: ["所有", "地铁1", "地铁1", "地铁1", "地铁1"],
        quyu3: [],
      })
    }

  },
  toQuyu2(e) {
    let active = e.currentTarget.dataset.quyu;
    this.setData({
      quyuActive2: active
    })
    // 以下修改成每次触发此事件时，根据quyu1的下标 quyuActive1和quyu2的下标 quyuActive2发送网络请求，得出的结果修改quyu3，从而达到修改三级联动的目的
    if (this.data.quyuActive1 == 0) {
      this.setData({
        quyu3: ["所有", "城东1", "城西1", "城南1", "城北1"],
      })
    } else {
     
    }


  },
  toQuyu3(e) {
    let active = e.currentTarget.dataset.quyu;
    this.setData({
      quyuActive3: active
    })
    // 根据quyu1的下标 quyuActive1、quyu2的下标 quyuActive2、 quyu3的下标 quyuActive3发送网络请求，得出结果
=======
  toQuyu(e) {
    let active = e.currentTarget.dataset.quyu;
    this.setData({
      quyuActive: active
    })
>>>>>>> 7dc7e11f6b1d5ae4c0dcc7313752497f1b416e7d
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

  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }
})