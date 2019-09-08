import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/hello'
import Login from '../components/login'
import Diary from '../components/diary'
import Contributions from '../components/contributions'
import Bill from '../components/bill'
import Detail from '../components/detail'
import About from '../components/about'
import Test from '../components/test'
import Todo from '../components/todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/new-diary/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/new-diary/diary',
      name: 'diary',
      component: Diary
    },
    {
      path: '/new-diary/contributions',
      name: 'contributions',
      component: Contributions
    },
    {
      path: '/new-diary/bill',
      name: 'bill',
      component: Bill
    },
    {
      path: '/new-diary/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/new-diary/about',
      name: 'about',
      component: About
    },
    {
      path: '/new-diary/test',
      name: 'test',
      component: Test
    },
    {
      path: '/new-diary/todo',
      name: 'todo',
      component: Todo
    }
  ],
  mode: 'hash'
})