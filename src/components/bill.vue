<template>
    <div class="bill" id="bill">
        <div class="bill-container">
            <!-- 最左侧时间标 -->
            <div class="bill-date">
                <div class="time-label todaylabel" style="position:absolute; top:48px; bottom: inherit;">
                    <span>今天</span>
                </div>
                <div class="time-label lastdaylabel" style="position:fixed; top:inherit; top:300px;">
                    <span>昨天</span>
                </div>
                <div class="time-label lastdaylabel" style="position:fixed; top:inherit; top:450px;">
                    <span>前天</span>
                </div>
                <div class="time-label lastdaylabel" style="position:fixed; top:inherit; bottom:70px;">
                    <span>上周</span>
                </div>
                <div class="time-label lastweeklabel" style="position: fixed; top: inherit; bottom: 20px;">
                    <span>上月</span>
                </div>
            </div>
            <!-- 中间的消费明细 -->
            <ul class="history-list">
                <li class="history-record">
                    <div v-for="(pages, index) in pages" class="r-info" :class="{'active':count === index}"
                   @click="earnMoney(index)" :key="index">
                        <span class="iconfont">&#xe637;</span>
                        <div class="cover-contain">
                            <div class="lazy-img">
                                <img src="../../icons/logo.png" alt="" style="width:100%; height:auto;">
                            </div>
                        </div>
                        <div class="r-txt">
                            <div class=bill-txt-title>
                                <div class="bill-txt-count">
                                    {{pages.money}}
                                    <span style="color:black;">rmb</span>
                                </div>
                                <div class="bill-txt-txt">
                                    {{pages.doing}}
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="bill-main">     <!-- 右侧添加消费记录 -->
                <div class="bill-create" style="margin-top: 30px; margin-bottom:20px; font-weight:bolder; font-size:25px;">
                    <span style="text-align:left;">添加一项记录</span>
                </div>
                <div class="bill-icon">
                    <ul class="bill-icon-ul">
                        <li v-for="(list, index) in list" class="bill-icon-li" :class="{'bill-icon-active':done === index}"
                         @click="doSome(index)" :key="index" >
                            <!-- <img src="../../icons/type_big_1.png" style="width:20px;"> -->
                            <!-- <div style="margin-top:10px;"></div> -->
                            <div style="margin-bottom:-5px;">
                                <img :src="list.imgUrl" class="img-using" alt="">
                            </div>
                            <span>{{list.using}}</span>
                        </li>
                    </ul>
                </div>
                <div class="bill-detail">
                    <input type="number" class="money-number" placeholder="金额" v-model.number="money" :style="{'background-color' : iconsColor}">
                    <textarea name="" class="bill-detail-text" id="billIconsColor" v-model="doing" :style="{'background-color' : iconsColor}" cols="30" rows="10" placeholder="请输入消费详情..."></textarea>
                </div>
                <button class="bill-detail-button" @click="addBill">完成</button>
                <div class="bill-count">
                    <div class="" style="margin-top:10px;">
                        <span style="font-size: 25px;color:orange; font-weight:bolder;">本月总支出: </span>
                        <span style="font-size:30px;color:#ff74a5; font-weight:bolder; letter-spacing:5px;">{{cc}}</span>
                        <span style="color:orange;">RMB</span>
                    </div>
                    <div class="bill-canvas" v-if="showCanvas">

                    </div>
                    <div class="bill-canvas-2" v-if="!showCanvas">

                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'bill',
  data () {
    return {
      list: [{
        str: 1,
        id: 1,
        using: '一般',
        color: '#afb341',
        imgUrl: require('../../icons/type_big_1.png')
      },
      {
        str: 4,
        id: 2,
        using: '日用品',
        color: '#6697a8',
        imgUrl: require('../../icons/type_big_28.png')
      },
      {
        str: 1,
        id: 3,
        using: '学习',
        color: '#6eaa70',
        imgUrl: require('../../icons/type_big_20.png')
      },
      {
        str: 2,
        id: 4,
        using: '娱乐',
        color: '#ed9241',
        imgUrl: require('../../icons/type_big_7.png')
      },
      {
        str: 4,
        id: 5,
        using: '住房',
        color: '#d1b95c',
        imgUrl: require('../../icons/type_big_8.png')
      },
      {
        str: 3,
        id: 6,
        using: '酒水',
        color: '#9b939e',
        imgUrl: require('../../icons/type_big_22.png')
      },
      {
        str: 1,
        id: 7,
        using: '通讯',
        color: '#475998',
        imgUrl: require('../../icons/type_big_35.png')
      },
      {
        str: 1,
        id: 8,
        using: '家居',
        color: '#52a24d',
        imgUrl: require('../../icons/type_big_34.png')
      },
      {
        str: 1,
        id: 9,
        using: '医疗',
        color: '#dba7bc',
        imgUrl: require('../../icons/type_big_18.png')
      },
      {
        str: 2,
        id: 10,
        using: '旅游',
        color: '#7f8b36',
        imgUrl: require('../../icons/type_big_19.png')
      },
      {
        str: 1,
        id: 11,
        using: '服饰',
        color: '#b47ca7',
        imgUrl: require('../../icons/type_big_27.png')
      },
      {
        str: 3,
        id: 12,
        using: '下午茶',
        color: '#a56840',
        imgUrl: require('../../icons/type_big_1001.png')
      },
      {
        str: 4,
        id: 13,
        using: '交通',
        color: '#6b83b7',
        imgUrl: require('../../icons/type_big_4.png')
      },
      {
        str: 1,
        id: 14,
        using: 'Pay',
        color: '#336565',
        imgUrl: require('../../icons/type_big_29.png')
      },
      {
        str: 1,
        id: 15,
        using: 'App',
        color: '#eb8abe',
        imgUrl: require('../../icons/type_big_6.png')
      },
      {
        str: 1,
        id: 16,
        using: '数码',
        color: '#b5a353',
        imgUrl: require('../../icons/type_big_23.png')
      },
      {
        str: 1,
        id: 17,
        using: '玩具',
        color: '#d6a834',
        imgUrl: require('../../icons/type_big_33.png')
      },
      {
        str: 3,
        id: 18,
        using: '饮料',
        color: '#2b9584',
        imgUrl: require('../../icons/type_big_1010.png')
      },
      {
        str: 3,
        id: 19,
        using: '早餐',
        color: '#5fa35a',
        imgUrl: require('../../icons/type_big_1002.png')
      },
      {
        str: 3,
        id: 20,
        using: '午餐',
        color: '#b36a66',
        imgUrl: require('../../icons/type_big_16.png')
      },
      {
        str: 3,
        id: 21,
        using: '晚餐',
        color: '#9068b5',
        imgUrl: require('../../icons/type_big_9.png')
      },
      {
        str: 3,
        id: 22,
        using: '食材',
        color: '#f19834',
        imgUrl: require('../../icons/type_big_37.png')
      },
      {
        str: 3,
        id: 23,
        using: '零食',
        color: '#9d7866',
        imgUrl: require('../../icons/type_big_3.png')
      },
      {
        str: 3,
        id: 24,
        using: '饮水',
        color: '#446987',
        imgUrl: require('../../icons/type_big_1015.png')
      }],
      done: '',
      count: '',
      pages: [{money: 10, doing: '包子 + 油条', abouting: '早餐'},
        {money: 20, doing: '饿了么: 煲仔饭', abouting: '午餐'},
        {money: 25, doing: '港式烧腊', abouting: '晚餐'},
        {money: 30, doing: '喜茶', abouting: '饮料'},
        {money: 20, doing: '乐事薯片 + 辣条', abouting: '零食'},
        {money: 40, doing: '电影:哪吒之魔童降世', abouting: '娱乐'},
        {money: 199, doing: '休闲裤', abouting: '服饰'},
        {money: 8, doing: '肠粉', abouting: '早餐'},
        {money: 15, doing: '黄焖鸡米饭', abouting: '午餐'},
        {money: 20, doing: '品香米线', abouting: '晚餐'}],
      money: '',
      doing: '',
      sum: '',
      iconsColor: '',
      showCanvas: true
    }
  },
  methods: {
    doSome (index) {
      this.done = index
      var iconsColor = this.list[index].color
      this.iconsColor = iconsColor
      /* console.log(iconsColor);  */
      /* iconsColor.style.borderColor = this.list[this.done].color; */
    },
    earnMoney (index) {
      this.count = index
    },
    addBill () {
      this.pages.unshift({
        money: this.money,
        doing: this.doing
      })
      this.showCanvas = !this.showCanvas
    }
  },
  computed: {
    cc: function () {
      let sum = 0
      for (let i = 0; i < this.pages.length; i++) {
        sum += this.pages[i].money
      }
      return sum
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
.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  margin-left: -7px;
  margin-top: 30px;
  color: #e1e2e2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.bill{
        border-top: solid 1px #e7e8e8;
        position: absolute;
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 100%;
    /* background-color: #f1f1f1; */
}
.bill-container{
    /* background-color: #f1f1f1; */
    display: flex;
    justify-content: center;
}
.bill-date{
    position: relative;
    width: 5%;
    height: 100%;
    margin-left: 1%;
    /* background-color: #f1f1f1; */
}

.time-label{
    font-size: 14px;
    text-align: center;
    height: 35px;
    line-height: 36px;
    color: #ff74a5;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 0 8px;
    position: fixed;
    border: 1px solid #ff74a5;
    cursor: pointer;
    z-index: 998;
}
.time-label::after,
.time-label::before{
    position: absolute;
    top: 13px;
    content: '';
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
}
.time-label::before{
    border-left: 8px solid #fff;
    margin-left: 34px;
    z-index: 2;
}
.time-label::after{
    right: -8px;
    border-left: 8px solid #ff74a5;
}
.history-list{
    list-style: none;
    display: block;
    position: relative;
    width: 40%;
    padding: 8px 0 10px;
    margin-top: 17px;
}
.history-record{
    display: block;
    position: relative;

}
.active{
    background-color: #ff74a5;
    color: #fff;
}
.r-info{
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;
    border-left: 1px solid #e1e2e2;
    margin-left: 6px;
}
.cover-contain{
    position: relative;
    width: 80px;
    height: 80px;
    margin-left: 30px;
    border-radius: 100%;
    /* background-color: #e7e8e8; */
}
.lazy-img{
    position: relative;
    overflow: hidden;
    margin-top: 10px;
    width: 80px;
    height: 80px;
}
.r-txt{
    width: 500px;
    height: 80px;
    margin-left: 30px;
    position: relative;
    font-size: 14px;
    border-bottom: 1px solid #e7e8e8;
    /* background-color: #f1f1f1; */
}
.bill-txt-title{
    cursor: pointer;
    padding-top: 5.5px;
    margin-top: 30px;
    color: #222;
    font-weight: 700;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.bill-txt-count{
    width: 30%;
    font-size: 20px;
    text-align: right;
    color: #ff74a5;
}
.bill-txt-txt{
    margin-left: 40px;
    width: 60%;
    font-size: 18px;
    text-align: left;
    color: #ff74a5;
}
.bill-main{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 100%;
    margin-left: 130px;
    /* background-color: #f1f1f1; */
}
.bill-icon{
    position: relative;
    width: 480px;
    height: 268px;
    margin-top: 15px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, .5);
    /* background-color: #fff; */
}
.bill-icon-ul{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    font-size: 16px;
}

.bill-icon-li{
    position: relative;
    padding: 0;
    margin: 0;
    padding-bottom: 5px;
    padding-top: 7px;
    width: 80px;
    height: 55px;
    cursor: pointer;
    text-align: center;
    border: none;
}
.bill-icon-li:hover{
    background-color: #e7e8e8;
}
.img-using{
    margin:0;
    width:30px;
    height:30px;
}
.bill-icon-active{
    background-color: #e7e8e8;
}
.bill-icon-click{
    position: relative;
    align-items: column;
    width: 30%;
    height: 5%;
    margin-top: 1%;
    border: 1px transparent;
    /* background-color: #fff; */
}
.bill-detail{
    width: 485px;
    height: 40px;
    margin-left: 1px;
    position: relative;
    display: flex;
    display: -moz-box;
    justify-content: center;
}
.money-number{
    width: 90px;
    height: 100%;
    outline: none;
    font-size: 20px;
    line-height: 20px;
    padding: 12px 10px 13px 20px;
    margin-top: 20px;
    background-color: #fff;
    color:#fff;
    border: 1px solid #ff74a5;
    border-right: none;
    border-radius: 5px;
    -moz-appearance: none;
}
.money-number::-webkit-outer-spin-button,
.money-number::-webkit-inner-spin-button{
    -webkit-appearance: none;
}

.bill-detail-text{
    width: 400px;
    height: 100%;
    outline: none;
    font-size: 20px;
    line-height: 20px;
    padding: 20px 20px 5px 20px;
    margin-top: 20px;
    background-color: #fff;
    color:#fff;
    border: 1px solid #ff74a5;
    border-left: none;
    border-radius: 5px;
    -moz-appearance: unset;
}
.bill-detail-text::placeholder{
    color:#fff;
}
.bill-detail-button{
    width: 300px;
    height: 40px;
    margin-left: 185px;
    border-radius: 20px;
    margin-top: 70px;
    outline: none;
    cursor: pointer;
    color: #42c02e;
    background: none;
    font-size: 20px;
    font-weight: bolder;
    border: 1px solid #42c02e;
}
.bill-detail-button:hover{
    background-color: #42c02e;
    color: #fff;
}
.bill-count{
    width: 85%;
    height: 25%;
    /* background-color: #e7e8e8; */
    margin-top: 12px;
    border-top: 1px solid #f1f2f2;
}
.bill-canvas{
    width: 0;
    height: 0;
    border-radius: 100%;
    border-width: 100px;
    border-style: solid;
    border-color: transparent transparent transparent orange;
    margin-top: 20px;
    margin-left: 130px;
    background-color: #d7d8d8;
}
.bill-canvas-2{
    width: 0;
    height: 0;
    border-radius: 100%;
    border-width: 100px;
    border-style: solid;
    border-color: orange orange orange orange;
    margin-top: 20px;
    margin-left: 130px;
    background-color: #d7d8d8;
}
</style>
