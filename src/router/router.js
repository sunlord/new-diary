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
      name: 'todo',
      component: Todo
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/diary',
      name: 'diary',
      component: Diary
    },
    {
      path: '/contributions',
      name: 'contributions',
      component: Contributions
    },
    {
      path: '/bill',
      name: 'bill',
      component: Bill
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
  mode: 'hash'
})
