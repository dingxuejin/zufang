// components/mymt/mymt.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img: {
      type: String,
      value: ""
    },
    tubiao: {
      type: String,
      value: "../../image/租房子/u358.png"
    },
    dizhi: {
      type: String,
      value: "???"
    },
    fang: {
      type: String,
      value: ""
    },
    daxiao: {
      type: Number,
      value: 0
    },
    jiage: {
      type: Number,
      value:0
    },
    weizhi: {
      type: String,
      value: "???"
    },
    youshi:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    rgb: ["#0099CC", "#60DD80", "#FF9933"],
    bgrgb: ["#B5DBFD", "#99ff77", "#ffdd55"],
  },

  /**
   * 组件的方法列表
   */
  ready: function () {
    let that = this;
    that.setData({
      changeRgb: changeNew(that.data.rgb),
      changeBgrgb: changeNew(that.data.bgrgb),
    })
    function changeNew(newArr) {
      let newRgb = [];
      if (that.data.youshi) {
        while (newRgb.length < that.data.youshi.length) {
          newRgb.push(...newArr);
        }
        newRgb.length = that.data.youshi.length;
      }

      return newRgb;
    }
  },
  methods: {

  }
})
