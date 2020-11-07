//index.js
//获取应用实例

/*
  1. 设计数据的结构(data属性)
  2. 将数据绑定到指定元素
  3. 注册事件,用户点击事件

*/
// Page({
//   data: {
//     username: 'admin',
//     password: '123'
//   },
//   loginHandle: function() {
//     // TODO
//     console.log(this.data.username)
//     console.log(this.data.password)
//   },
//   registerHandle: function() {
//     // TODO

//   },
//   userInputHandle: function(e) {
//     this.setData({
//       userName: e.detail.value
//     })
//   },
//   passwordInputHandle: function(e) {
//     this.setData({
//       password: e.detail.value
//     })
//   }
// })

// Version 2
// Page({
//   data: {
//     username: 'admin',
//     password: '123'
//   },
//   loginHandle: function() {
//     // TODO
//     console.log(this.data.username)
//     console.log(this.data.password)
//   },
//   registerHandle: function() {
//     // TODO

//   },
//   inputHandle: function(e) {
//     // prop可变
//     // var prop = 'userName'
//     var prop = e.target.dataset['prop']
//     var input = {}
//     input[prop] = e.detail.value
//     this.setData(input)
//   }
// })

// Version 3 - form
Page({
  data: {
    username: 'admin',
    password: '123'
  },
  pageHandle: function(e) {
    // 表單提交事件
    console.log(e.detail)
    console.log(e.detail.value['username'])
    console.log(e.detail.value['password'])
  }
})
