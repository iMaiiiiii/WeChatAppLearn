//app.js

console.log('================================')


/*
  小程序JS与web的JS差异
    1. 小程序不是运行在浏览器中,所以没BOM和DOM对象. 
    2. 小程序JS中有一些额外的全局成员. 
        App, 用于定义应用程序示例对象
        Page, 用于定于页面对象
        getApp, 用于获取全局应用程序对象 唯一的应用程序示例 
        getCurrentPages, 获取当前页面的调用栈,数组第一个是首页,数组最后一个是当前页面.
        wx, 用于提供微信核心API.  
    3. 小程序JS是支持commonJS规范,  
        3.1 定义类,定义方法.
        3.2 到处方法 module.exports
        3.3 require拿出方法,进行调用
    4. ES6   
 */
// 1. 
console.log(window)  // 结果为:undefined
console.log(document) // 结果为:undefined

console.log('================================')

const foo = require('./utils/foo.js')
foo.say('Worold!')
  
App({
  onLaunch: function () {
    console.log(wx)
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
  },
  // 2. 
  foo: function () {
    console.log(123)
  }
})