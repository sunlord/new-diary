<template>
  <div id="app">
    <div class="background-image">
      <div class="header">
        <div class="logo">
          <img style="width:100px;height:40px;" src="../icons/logo-main.png" alt="">
        </div>
        <div class="navigator">
          <ul class="navigator-ul">
            <li>
              <div class="person-head" @click="showCont">
                <a href="#" class="person-head-a">
                  <img style="width: 200%; margin-left: -18px; margin-top: 0px;" src="../icons/headimg.png" />
                </a>
              </div>
              <ul v-if="show" class="person-menu">
                <div class="person-menu-diary">
                  <li class="person-menu-diary-1">
                    <router-link to="/detail" class="menu-a">
                      <span class="iconfont-1" style="font-size:15px;margin-right:15px;">&#xe608;</span>
                      <span>我的主页</span>
                    </router-link>
                    <!-- <a class="menu-a" href="/detail">
                     
                    </a> -->
                  </li>
                  <li class="person-menu-diary-1">
                    <router-link to="/diary" class="menu-a">
                      <span class="iconfont-1">&#xe667;</span>
                      <span>写日记</span>
                    </router-link>
                    <!-- <a class="menu-a" href="/diary">
                    </a> -->
                  </li>
                </div>
                <div class="person-menu-diary">
                  <li class="person-menu-diary-1">
                    <router-link to="/bill" class="menu-a">
                      <span class="iconfont-1">&#xe631;</span>
                      <span>记账单</span>
                    </router-link>
                    <!-- <a class="menu-a" href="/bill">
                    </a> -->
                  </li>
                  <li class="person-menu-diary-1">
                    <router-link to="/" class="menu-a">
                      <span class="iconfont-1">&#xe610;</span>
                      <span>TodoList</span>
                    </router-link>
                    <!-- <a class="menu-a" href="/todo">
                    </a> -->
                  </li>
                  <li class="person-menu-diary-1">
                    <router-link to="/contributions" class="menu-a">
                      <span class="iconfont-1">&#xe631;</span>
                      <span>查看图表</span>
                    </router-link>
                    <!-- <a class="menu-a" href="/contributions">
                    </a> -->
                  </li>
                  <li class="person-menu-diary-1">
                    <router-link to="" class="menu-a">
                      <span class="iconfont-1">&#xe66f;</span>
                      <span>联系管理</span>
                    </router-link>
                    <!-- <a class="menu-a" href="">
                    </a> -->
                  </li>
                  <li class="person-menu-diary-1">
                    <router-link to="/about" class="menu-a">
                      <span class="iconfont-1">&#xe6a1;</span>
                      <span>关于</span>
                    </router-link>
                    <!-- <a class="menu-a" href="/about">
                    </a> -->
                  </li>
                </div>
                <div class="person-menu-diary">
                  <li class="person-menu-diary-1">
                    <router-link to="/Login" class="menu-a">
                      <span class="iconfont-1">&#xe61b;</span>
                      <span>重登</span>
                    </router-link>
                    <!-- <a class="menu-a" href="/">
                    </a> -->
                  </li>
                  <li class="person-menu-diary-1">
                    <router-link to="/hello" class="menu-a">
                      <span class="iconfont-1">&#xe66c;</span>
                      <span>登出</span>
                    </router-link>
                    <!-- <a class="menu-a" href="/hello">
                    </a> -->
                  </li>
                </div>
              </ul>
            </li>
            <li>
              <router-link to="/bill" class="nav-a">账单</router-link>
              <!-- <a class="nav-a" href="/bill">账单 </a> -->
            </li>
            <li>
              <router-link to="/diary" class="nav-a">日记</router-link>
              <!-- <a class="nav-a" href="/diary">日记 </a> -->
            </li>
          <li>
            <router-link to="/" class="nav-a">Todo</router-link>
            <!-- <a class="nav-a" href="/todo">Todo </a> -->
          </li>
            <li>
              <router-link to="/about" class="nav-a">关于</router-link>
              <!-- <a class="nav-a" href="/about">关于 </a> -->
            </li>
          </ul>
        </div>
      </div>
      <!-- 渲染的容器，组件在这里实现 -->
      <router-view></router-view>
    </div>
    <vue-canvas-nest></vue-canvas-nest>
  </div>
</template>

<script>
import vueCanvasNest from './components/background'
export default {
  name: 'app',
  data () {
    return {
      config: {
        color: '255,0,0',
        count: 88
      },
      show: false,
      nav: [{
        link: '/bill',
        name: '账单'
      },{
        link: '/diary',
        name: '日记'
      },{
        link: '/',
        name: 'Todo'
      },{
        link: '/about',
        name: '关于'
      }]
    }
  },
  methods: {
    showCont () {
      this.show = !this.show
    },
    showMe () {
      this.show = !this.show
      console.log(111)
    },
    hiddenMe () {
      this.show = !this.show
    }
  },
  components: {
    vueCanvasNest
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: 'iconfont';
  src: url('./fonts/iconfont.eot');
  src: url('./fonts/iconfont.eot?#iefix') format('embedded-opentype'),
      url('./fonts/iconfont.woff2') format('woff2'),
      url('./fonts/iconfont.woff') format('woff'),
      url('./fonts/iconfont.ttf') format('truetype'),
      url('./fonts/iconfont.svg#iconfont') format('svg');
}
.iconfont-1 {
  font-family: "iconfont" !important;
  font-size: 15px;
  margin-right: 10px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.background-image{
  width: 100%;
  height: 100%;
  margin-left: -8px;
  /* background-color: #666; */
}
.header{
  margin-top: -8px;
  padding-right: 16px;
  width: 100%;
  height: 5%;
  display: flex;
  position: relative;
  justify-content: space-around;
  /* background-color: #f1f1f1; */
}

.header .logo{
  display: flex;
  position: relative;
  justify-content: left;
  height: 95%;
  width: 12%;
  margin-top: 5px;
  font-weight: bolder;
  margin-left: 4%;
}

.navigator{
  display: flex;
  position: relative;
  justify-content: right;
  font-size:22px;
  height: 40px;
  text-align: center;
  margin-top: 10px;
  margin-right: 20px;
}
.navigator .nav-a{
  margin-left:20px;
  color: #73797e;

}
.nav-a:link{
  text-decoration: none;
}
.header .navigator .nav-a:active{
  color: red;
}
.header .navigator .nav-a:hover{
  color:red;
}
.navigator-ul{
  list-style: none;
  display: flex;
  margin-top: 0px;
}
.person-head{
  display: flex;
  position: relative;
  width:40px;
  height: 40px;
  overflow: hidden;
  margin-top: -5px;
  border: 2px solid #f0f0f0;
  border-radius: 100%;
}
.person-head:hover{
  border-color:#e7e8e8;
}
.person-menu{
  width: 100px;
  height: 348px;
  background: #fff;
  font-size: 18px;
  z-index: 2;
  top: 50px;
  list-style: none;
  margin-left: -50px;
  /* overflow: hidden; */
  position: absolute;
  border: 1px solid #dddee0;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
}
.person-menu::before{
  content: '';
  left: 60px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #f1f1f1;
  top: -9px;
  z-index: 1;
  position: absolute;
}
.person-menu::after{
  content: '';
  left: 60px;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-bottom: 9px solid #fff;
  top: -7px;
  z-index: 1;
  position: absolute;
}

.person-menu-diary{
  width: 160%;
  margin-left: -40px;
  margin-top: 10px;
  border-bottom: 1px solid #eeeeee;
}
.person-menu-diary-1{
  padding-left:15px;
  height: 30px;
  padding-top: 5px;
  text-align: left;

}
.person-menu-diary-1:hover{
  background-color: #f1f1f1;
}
.menu-a{
  text-decoration: none;
  color: #73797e;
}

</style>
