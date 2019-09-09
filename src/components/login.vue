<template>
    <div class="login" id="login">
        <div>
            <div class="login-center">
                <div class="select" v-if="downL">
                    <div class="select-login" v-if="!showLogin">
                        <button class="login-in-form" style="color: #e67040;font-weight:bolder;margin-top:30px;">登&nbsp;&nbsp;&nbsp;录</button>
                        <div class="select-sign-in">
                            <div class="button-login">
                                <i class="iconfont-1">&#xe616;</i>
                                <input type="text" placeholder="手机号或者邮箱" class="username"><br>
                                <i class="iconfont-2">&#xe65a;</i>
                                <input type="password" placeholder="不少于6位" class="password">
                                <router-link @click="onShowLogin" to="/detail">
                                    <button class="submit-button">登&nbsp;录</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="check-code" v-if="showLogin">
                    <slide-verify :l="42"
                            :r="10"
                            :w="400"
                            :h="300"
                            slider-text="向右滑动以验证"
                            @success="onSuccess"
                            @fail="onFail"
                            @refresh="onRefresh"
                        ></slide-verify>
                        <!-- <div id="msgColor">{{msg}}</div> -->
                    </div>
                </div>
                <div class="QRcode" v-if="!downL">
                    <img src="../../icons/QRcode.png" alt="" style="width:100%;margin-top:-40px;">
                </div>
            </div>
            <div class="download-app">
                <button class="download-app-button" @click="clickDown">
                    <span>下载维尼记 App</span>
                </button>
            </div>
        </div>
    </div>

</template>

<script>
import Vue from 'vue'
import SlideVerify from 'vue-monoplasty-slide-verify'
Vue.use(SlideVerify)

export default {
  name: 'login',
  data () {
    return {
      showLogin: false,
      downL: true,
      name: ['jiong'],
      password: ['jiong']
    }
  },
  methods: {
    onShowLogin () {
      this.showLogin = !this.showLogin
    },
    onSuccess () {
      /* this.msg = '登录成功！' */
      /* var colors = document.getElementById("msgColor");
      colors.style.color = "#42c02e"; */
      alert('登录成功！')
      /* window.location.href = '/#/bill' */
      
    },
    onFail () {
      /* this.msg = '请重新验证！' */
      alert('请重新验证')
    },
    onRefresh () {
      /* this.msg = '' */
    },
    clickDown () {
      this.downL = !this.downL
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'iconfont';
  src: url('../fonts/iconfont.eot');
  src: url('../fonts/iconfont.eot?#iefix') format('embedded-opentype'),
      url('../fonts/iconfont.woff2') format('woff2'),
      url('../fonts/iconfont.woff') format('woff'),
      url('../fonts/iconfont.ttf') format('truetype'),
      url('../fonts/iconfont.svg#iconfont') format('svg');
}
.login{
    border-top: solid 1px #e7e8e8;
    display: flex;
    justify-content: center;
    position: absolute;
    text-decoration: none;
    width: 100%;
    height: 100%;
    background-color: #f1f1f1;
}
.login-center{
    width: 400px;
    height: 450px;
    margin-top: 150px;
    border-radius: 3px;
    /* background-color: #f1f1f1; */
    background: rgba(255, 255, 255, .7);
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, .1);
    overflow: hidden;
}
.login-center::before{
    content: '';
    filter: blur(20px);
    z-index: -1;
    margin: -30px;
}
.select{
    margin-top: 20px;
    display: block;
    text-align: center;
    font-size: 25px;
    /* background-color: #f2f2f2; */
}
.select .login-in-form{
    border: none;
    width: 80px;
    height: 40px;
    outline: none;
    font-size: 30px;
    background: rgba(255, 255, 255, .3);
}
.select .login-up-form{
    margin-left: 10px;
    border: none;
    width: 80px;
    height: 40px;
    outline: none;
    cursor: pointer;
    font-size: 30px;
}
.button-login{
    font-size: 25px;
    text-align: center;
    margin: 20px;
}
.iconfont-1{
    font-family: "iconfont" !important;
    font-size: 20px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.iconfont-2{
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.button-login .username{
    margin-top: 30px;
    position: relative;
    width: 300px;
    height: 50px;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid 1px #e7e8e8;
    text-align: center;
    font-size: 18px;
    line-height: 18px;
    text-decoration: underline;
    background: rgba(255, 255, 255, .3);
}
.button-login .password{
    position: relative;
    width: 300px;
    height: 50px;
    outline: none;
    margin-top: 20px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid 1px e7e8e8e;
    text-align: center;
    font-size: 18px;
    line-height: 18px;
    background: rgba(255, 255, 255, .3);
}
.submit-button{
    width: 300px;
    height: 45px;
    font-size: 20px;
    cursor: pointer;
    outline: none;
    color: #fff;
    border: solid 1px;
    border-radius: 6px;
    background-color: #3194d0;
    margin-left: 20px;
    margin-top: 70px;
}
.submit-button:hover{
    background-color: #3a83af;
}
.download-app{
    width: 400px;
    height: 40px;
    margin-top: 40px;
    background-color: #fff;
}
.download-app-button{
    width: 100%;
    height: 100%;
    font-size: 15px;
    font-family: "黑体";
    color: white;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 4px;
    background: rgba(255, 255, 255, .3);
    background-color: #8590A6;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, .3);
}
.QRcode{
    width: 100%;
    height: 100%;
}
</style>
