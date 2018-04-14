// components/mysearch/mysearch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   * toSearch按搜索时传detail给父元素
   */
  methods: {
    toSearch(e) {
      this.triggerEvent('toSearch', e.detail)
    }
  }
})
