//index.js
//获取应用实例
const app = getApp()

Page({ 
  // 为页面提供数据,因为没有BOM和DOM没办法获取到元素后,再进行赋值.
  // 界面和逻辑之间的桥梁
  data: {
    message : 'Hello world!',
    person: {
      name: 'iu',
      age: 18
    },
    viewClassName: 'Hello',
    todos: [
      { name: 'JavaScript',complete : false },
      { name: 'HTML',complete : true }, 
      { name: 'CSS',complete : false }
    ],
    item : '呵呵呵'
  }
})
