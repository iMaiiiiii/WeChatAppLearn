//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})

/*
  框架 要求我们按照要求编写代码 程序再按照规则执行代码 

  1. 数据在哪? 所有数据都要绑定在页面data属性中.
    {{}}这种语法叫作 Mustache
  2. 数据显示在哪里? 希望绑定到哪里,就在哪里使用,用Mustache进行输出. 

  mustache语法:
  1. innetHTML(比喻 类似)
  2. 元素的属性上 
  3. 可以使用字面量直接赋值
  4. 可以使用简单的原选符号
  5. 当语法解析误解了,可以使用mustache解决
  不能用在标签名和属性上. 

  List用法:
  1. 明确页面结构中的循环体,
  2. 删除多余循环内容
  3. 加上wx.for属性,属性值等于要遍历的数据源,数据源是数组,
  4. 再循环体内部使用item代表遍历的元素.  

  5. 给被遍历的对象起名字wx:for-item
     给被便利的对象起索引wx:for-index 
*/