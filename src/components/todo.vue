<template>
  <div id="todo" class="todo">
      <div class="todo-center">
        <section class="todoapp" v-cloak>
            <header class="header">
                <h1>TodoList</h1>
                <input type="text" class="todo-input"
                placeholder="你接下来需要做什么? 请在此输入"
                autofocus autocomplete="off" v-model="newTodo"
                @keyup.enter="addTodo">
                <!-- 添加一个key的enter事件 addTodo -->
            </header>
        </section>
        <div class="todo-doing">
            <section class="todo-main" v-show="todos.length">
                <ul class="todo-list">
                    <li class="todo-li" v-for="(todo,index) in todos" :key="index" @click="todoClick(index)" :class="{'todo-done': todos[index].completed == true}">
                        <label>{{ todo.title }}</label>
                        <button @click="removeTodo(todoList, index)" class="remove-button">
                            <span class="iconfont-delete">&#xe618;</span>
                        </button>
                    </li>

                </ul>
            </section>
        </div>
        <div class="todo-last">
            <!-- <ul class="todo-list">
                    <li class="todo-li-last" v-for="(todo,index) in todos" :key="index" @click="todoClick(index)" :class="{'todo-done': todos[index].completed == true}">
                        <div class="view-todo">
                            <label>{{ todo.title }}</label>
                            <button @click="removeTodo(todoList)" class="remove-button"></button>
                        </div>
                    </li>
                </ul> -->
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
      todos: [{
        id: 0,
        title: '跑步三公里，坚持做最好的自己',
        completed: false
      }, {
        id: 0,
        title: '去朋友家拿书，顺便帮他清理掉(白嫖)不需要的东西',
        completed: true
      }, {
        id: 1,
        title: '不熬夜，做一个好梦',
        completed: false
      }, {
        id: 2,
        title: '练字日常，慢慢变得优秀',
        completed: false
      }],
      newTodo: '',
      todoC: 0,
      todoList: ''
    }
  },
  methods: {
    // 添加新条目的方法
    addTodo: function () {
      // 新条目(去除前后空格)
      var value = this.newTodo && this.newTodo.trim()
      // 如果新条目没内容，结束
      if (!value) { return }
      // 存放新条目到todos对象
      this.todos.push({
        // id增加1，id用来存key
        id: this.todos.length ? this.todos[this.todos.length - 1].id++ : 1,
        // 存放新条目内容
        title: value,
        // 事件完成（默认没完成)
        completed: false
      })
      // 将data里的新条目设空
      this.newTodo = ''
    },
    removeTodo (todoList, index) {
      var r = confirm('确定要删除此项Todo吗？')
      if (r === true) {
        this.todos.splice(this.todos.indexOf(todoList), 1)
        this.todos[index].completed = !this.todos[index].completed
      } else {
        this.todos[index].completed = !this.todos[index].completed
      }
    },
    todoClick (index) {
      this.todoC = index
      this.todos[index].completed = !this.todos[index].completed
    }
  }
}
</script>

<style>
.todo{
    border-top: solid 1px #e7e8e8;
    position: absolute;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}

@font-face {
  font-family: 'iconfont';
  src: url('../fonts/iconfont.eot');
  src: url('../fonts/iconfont.eot?#iefix') format('embedded-opentype'),
      url('../fonts/iconfont.woff2') format('woff2'),
      url('../fonts/iconfont.woff') format('woff'),
      url('../fonts/iconfont.ttf') format('truetype'),
      url('../fonts/iconfont.svg#iconfont') format('svg');
}

.iconfont-delete {
  font-family: "iconfont" !important;
  font-size: 30px;
  font-style: normal;
  /* margin-left: -7px;
  margin-top: 30px; */
  color: #cc9a9a;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.todo-center{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 65%;
}

.todo-input{
    width: 50%;
    height: 50px;
    font-size: 23px;
    padding-left: 10px;
    display: flex;
    margin-top: 130px;
    justify-content: center;
    outline: none;
}
.todo-input::-webkit-input-placeholder{
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
}
.todo-input::-moz-placeholder{
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
}
.todo-input::input-placeholder {
    font-style: italic;
    font-weight: 700;
    color: #f1f1f1;
}
.todoapp h1{
    position: absolute;
    top: -55px;
    width: 100%;
    font-size: 80px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
}
.todo-doing{
    position: relative;
    width: 100%;
    height: 30%;
    margin-top: 5%;
}

.todo-main{
    position: relative;
    width: 100%;
    height: 100%;
}

.todo-list{
    position: relative;
    margin: 0;
    padding: 0;
    height: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: row-reverse;
    cursor: pointer;
}

.todo-list-last{
    visibility: hidden;
    margin: 0;
    padding: 0;
    height: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-around;
    flex-direction: row-reverse;
    cursor: pointer;
}

.todo-li {
    position: relative;
    font-size: 20px;
    width:17%;
    margin-top: 5%;
    margin-left: 4%;
    margin-right: 4%;
    height: 100%;
    border-radius: 9%;
    background-color: #fff;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.1);
}

.todo-done{
    opacity: 0.2;
    position: relative;
    font-size: 20px;
    width:17%;
    margin-top: 5%;
    margin-left: 4%;
    margin-right: 4%;
    height: 100%;
    border-radius: 9%;
    background-color: #cc9a9a;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.1);
}

.todo-done::after{
    content: '已完成';
    font-size: 30px;
    color: #000;
    font-weight: bolder;
}

.view-todo {
    margin-top: 10px;
}

.check-input{
    border: none;
    text-align: center;
    width: 40px;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-appearance: none;
    appearance: none;
    opacity: 0;
}

label {
    word-break: break-all;
    padding: 20px 10px 10px 10px;
    display: inline-block;
    transition: color 0.4s;
    color: #cc9a9a;
    font-weight:500;
}

.remove-button{
    display:none;
    position: absolute;
    width:40px;
    height: 40px;
    top: 0;
    right: 40%;
    bottom: -50px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
}
.iconfont-delete:hover{
    color: #af5b5e;
}

.todo-li:hover .remove-button{
    display: block;
}

.todo-last{
    width:100%;
    height: 30%;
    margin-top: 2%;
}
</style>
