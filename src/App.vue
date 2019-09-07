<template>
  <div id="app">
    <div class="background-image">
      <div class="header">
        <span class="logo">
          <img style="width:100px;height:40px;" src="../icons/logo-main.png" alt="">
        </span>
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
                    <a class="menu-a" href="/detail">
                      <span class="iconfont-1" style="font-size:15px;margin-right:15px;">&#xe608;</span>
                      <span>我的主页</span>
                    </a>
                  </li>
                  <li class="person-menu-diary-1">
                    <a class="menu-a" href="/diary">
                      <span class="iconfont-1">&#xe667;</span>
                      <span>写日记</span>
                    </a>
                  </li>
                </div>
                <div class="person-menu-diary">
                  <li class="person-menu-diary-1">
                    <a class="menu-a" href="/bill">
                      <span class="iconfont-1">&#xe631;</span>
                      <span>记账单</span>
                    </a>
                  </li>
                  <li class="person-menu-diary-1">
                    <a class="menu-a" href="/todo">
                      <span class="iconfont-1">&#xe610;</span>
                      <span>TodoList</span>
                    </a>
                  </li>
                  <li class="person-menu-diary-1">
                    <a class="menu-a" href="/contributions">
                      <span class="iconfont-1">&#xe631;</span>
                      <span>查看图表</span>
                    </a>
                  </li>
                  <li class="person-menu-diary-1">
                    <a class="menu-a" href="">
                      <span class="iconfont-1">&#xe66f;</span>
                      <span>联系管理</span>
                    </a>
                  </li>
                  <li class="person-menu-diary-1">
                    <a class="menu-a" href="/test">
                      <span class="iconfont-1">&#xe6a1;</span>
                      <span>关于</span>
                    </a>
                  </li>
                </div>
                <div class="person-menu-diary">
                  <li class="person-menu-diary-1">
                    <a class="menu-a" href="/">
                      <span class="iconfont-1">&#xe61b;</span>
                      <span>重登</span>
                    </a>
                  </li>
                  <li class="person-menu-diary-1">
                    <a class="menu-a" href="/hello">
                      <span class="iconfont-1">&#xe66c;</span>
                      <span>登出</span>
                    </a>
                  </li>
                </div>
              </ul>
            </li>
            <li>
              <a class="nav-a" href="/bill">账单 </a>
            </li>
            <li>
              <a class="nav-a" href="/diary">日记 </a>
            </li>
          <li>
            <a class="nav-a" href="/todo">Todo </a>
          </li>
            <li>
              <a class="nav-a" href="/about">关于 </a>
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
      show: false
    }
  },
  methods: {
    showCont () {
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
  font-size: 30px;
  font-weight: bolder;
  margin-left: 4%;
  color: #ff74a5;
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
  z-index: 9999;
  list-style: none;
  margin-left: -50px;
  margin-top: 3px;
  overflow: hidden;
  position: absolute;
  border: 1px solid #dddee0;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
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
