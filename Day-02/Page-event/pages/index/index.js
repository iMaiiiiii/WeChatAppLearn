Page({
  buttonTapHandle: function(e) {
    console.log(123)
    console.dir('d')
    // console.dir将一个对象以树状的形式打印到控制台
    console.dir(e)
  },
  innerHandle: function() {
    console.log('inner')
  },
  outterHandle: function() {
    console.log('outter')
  },
  tap2Handle: function(e) {
    // 事件处理函数中的this还是页面对象,跟HTML不一样.
    console.log(this)
    // e.target 获取的是点击的元素
    // dataset指的是元素上所有data-开头的属性集合
    console.dir(e.target.dataset)
  }
})
