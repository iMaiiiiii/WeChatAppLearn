// pages/todos/todos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 文本框数据模型
    search: '',
    // 任务清单数据模型
    todos:[
      {name: 'Learning HTML',completed: false},
      {name: 'Learning CSS',completed: true},
      {name: 'Learning JavaScript',completed: false}
    ],
    leftCount: 2,
    allCompleted: false
  },
  addHandle: function() {
    if (!this.data.search) {
      return
    }
    // 数组刷新.
    var todosTmp = this.data.todos
    todosTmp.push({
      name: this.data.search,
      completed: false
    })
    this.setData({ todos: todosTmp, 
      search: '', 
      leftCount: this.data.leftCount + 1})
  },
  inputChangeHandle: function(e) { 
    this.setData({
      search: e.detail.value
    })
  },
  toggleTodoHandle: function(e) {
    var item = this.data.todos[e.currentTarget.dataset.index]
    item.completed = !item.completed
    var leftCount = this.data.leftCount + (item.completed ? -1 : 1)
    this.setData({ todos: this.data.todos, 
       leftCount: leftCount})
  },
  removeTodoHandle: function(e) {
    var todos = this.data.todos
    // 移除的元素
    var item = todos.splice(e.currentTarget.dataset.index, 1)[0]
    var leftCount = this.data.leftCount + (item.completed ? 0 : -1)
    item.completed = !item.completed
    this.setData({ todos: todos,leftCount: leftCount })
  },
  toggleAllHandle: function(e) {
    // this永远指向当前页面对象
    this.data.allCompleted = !this.data.allCompleted
    var todos = this.data.todos
    var that = this
    todos.forEach(function (item) {
      item.completed = that.data.allCompleted
    }) 
    this.setData({ todos : todos, leftCount:this.data.allCompleted ? 0 : this.data.todos.length})
  },
  clearCompletedHandle: function(e) {
    // var todos = []
    // var that = this
    // this.data.todos.forEach(function (item) {
    //   if (!item.completed) {
    //     todos.push(item)
    //   }
    // })

    var todos = this.data.todos.filter(function (item) {
      return !item.completed
    })

    this.setData({ todos : todos })
  }
})