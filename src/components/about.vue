<template>
    <div id="about" class="about">
        <div class="about-main">
            <div class="about-scroll">
                <div class="scroll-main" @mouseenter="clearI" @mouseleave="autoPlay">
                  <div class="scroll-wrap" style="left:-1000px">
                      <img src="../../icons/scroll-5.png" alt="">
                      <img src="../../icons/scroll-1.png" alt="">
                      <img src="../../icons/scroll-2.png" alt="">
                      <img src="../../icons/scroll-3.png" alt="">
                      <img src="../../icons/scroll-4.png" alt="">
                      <img src="../../icons/scroll-5.png" alt="">
                      <img src="../../icons/scroll-1.png" alt="">
                  </div>
                  <a href="javascript:;" class="arrow arrow_left" @click="prevPic()">&lt;</a>
                  <a href="javascript:;" class="arrow arrow_right" @click="nextPic()">&gt;</a>
                </div>
                <div class="scroll-buttons">
                  <span class="scroll-span"></span>
                  <span class="scroll-span"></span>
                  <span class="scroll-span"></span>
                  <span class="scroll-span"></span>
                  <span class="scroll-span"></span>
                </div>
            </div>
            <div class="scroll-text">
                <div class="scroll-text-1" :class="{'scroll-text-display': index == 0}">
                    <p>高效</p>
                    <p style="font-size: 23px; color:#ff74a5;">无需复杂的步骤，功能一目了然</p>
                </div>
                <div class="scroll-text-1" :class="{'scroll-text-display': index == 1}">
                    <p>快捷</p>
                    <p style="font-size: 23px; color:#ff74a5;">随时记下你所想，随地写下你说思</p>
                </div>
                <div class="scroll-text-1" :class="{'scroll-text-display': index == 2}">
                    <p>纯净</p>
                    <p style="font-size: 23px; color:#ff74a5;">没有广告，没有广告，没有广告</p>
                </div>
                <div class="scroll-text-1" :class="{'scroll-text-display': index == 3}">
                    <p>安全</p>
                    <p style="font-size: 23px; color:#ff74a5;">采用https加密传输，您的信息更安全</p>
                </div>
                <div class="scroll-text-1" :class="{'scroll-text-display': index == 4}">
                    <p>易用</p>
                    <p style="font-size: 23px; color:#ff74a5;">功能简单，无需花费学习成本</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {checkDots} from '../js/about.js'

export default {
  name: 'about',
  data () {
    return {
      timer: '',
      index: 0,
      dots: document.getElementsByTagName('span')
    }
  },
  methods: {
    nextPic () {
      let newLeft
      let wrap = document.querySelector('.scroll-wrap')
        if (wrap.style.left === '-5000px') {
          newLeft = -1000
        }else {
          newLeft = parseInt(wrap.style.left) - 1000
        }
      wrap.style.left = newLeft + 'px'
      this.index++
      if (this.index > 4) {
        this.index = 0
      }
      this.showCurrentDot()
    },
    prevPic () {
      let newLeft
      let wrap = document.querySelector('.scroll-wrap')
      if (wrap.style.left === '0px') {
        newLeft = -4000
      }else {
        newLeft = parseInt(wrap.style.left) + 1000
      }
      wrap.style.left = newLeft + 'px'
      this.index--
      if (this.index < 0) {
        this.index = 4
      }
      this.showCurrentDot()
    },
    autoPlay () {
      this.timer = setInterval(this.nextPic, 2000)
    },
    clearI () {
      clearInterval(this.timer)
    },
    showCurrentDot () {
      for (let i = 0; i < this.dots.length; i++) {
        this.dots[i].className = ''
      }
      this.dots[this.index].className = 'on'
    },
  },
  mounted () {
    let that = this
    that.timer = setInterval(that.nextPic, 2000)
    that.showCurrentDot()
  }
}
</script>

<style>
.about{
    border-top: solid 2px #e7e8e8;
    display: flex;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #f1f1f1;
}

a{
    text-decoration: none;
}
.about-main{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -100px;
}

.about-scroll{
    margin-top: 1%;
    display: flex;
    height: 500px;
    justify-content: center;
    flex-direction: column;
    margin:100px auto 0 auto;
}

.scroll-main{
    position: relative;
    width: 1000px;
    height: 400px;
    cursor: pointer;
    overflow:hidden;
}

.scroll-wrap {
    position: absolute;
    width: 7000px;
    height: 400px;
    z-index: 1;
    font-size: 0;
}

.about-scroll .scroll-wrap img{
    float: left;
    width: 1000px;
    height: 400px;
}

.about-scroll .scroll-buttons {
    display: inline-block;
    width: 400px;
    height: 50px;
    margin-top: 50px;
    margin-left: 300px;
}
.about-scroll .scroll-buttons span {
    display: inline-block;
    width: 30px;
    height: 6px;
    margin-right: 8px;
    margin-left: 8px;
    border-radius: 2px;
    background-color: #fff;
    color:white;
    cursor: pointer;
}

.about-scroll .scroll-buttons span.on{
    background-color: #ff74a5;
    width: 50px;
    margin-left: -3px;
    margin-right: -3px;
}
.about-scroll .scroll-buttons span:hover{
    background-color: #ff74a5;
    width: 50px;
    margin-left: -3px;
    margin-right: -3px;
}
.about-scroll .arrow {
    position: absolute;
    top: 40%;
    color: gray;
    padding:0px 0px;
    border-radius: 100%;
    background: none;
    font-size: 50px;
    z-index: 2;
    display: none;
}
.about-scroll .arrow_left {
    left: 10px;
}
.about-scroll .arrow_right {
    right: 10px;
}
.about-scroll:hover .arrow {
    display: block;
}
.about-scroll .arrow:hover {
    color: #ff74a5;
}
.scroll-text{
    position: relative;
    width: 1000px;
    height: 150px;
    margin-top: 10px;
}
.scroll-text-1{
    display: none;
}
.scroll-text-display{
    display: block;
    font-size: 30px;
    color: orange;
    margin-top: 10px;
    font-weight: 500;
}
</style>
