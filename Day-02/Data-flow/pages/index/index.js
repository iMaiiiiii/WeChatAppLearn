//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    message: 'initial'
  },
  inputHandle: function(e) {
    // 直接赋值,不会自动刷新UI,需要手动刷新UI. 
    this.data.message = e.detail.value
    console.log(this.data.message)
    // 通知界面刷新数据,不会自动刷新,需要把需要刷新的控件作为对象赋值给setData方法
    // 用来改变data,与直接赋值区别在于,可以通知界面刷新UI,直接赋值不可以刷新UI(早期JS无法实现)
    // 数据和UI同时发生了改变,
    this.setData({
      message : e.detail.value
    })
  }
})
