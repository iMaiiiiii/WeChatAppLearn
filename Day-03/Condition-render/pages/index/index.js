//index.js
Page({
  data: {
    show: false
  },
  changeRenderHandle: function() {
    this.setData({ show: !this.data.show })
  }
})
