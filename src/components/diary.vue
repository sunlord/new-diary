<template>
    <div class="diary">
        <div class="detail">
            <div class="new-book">
                <div class="add">
                    <i class="iconfont" style="font-size:16px;">&#xe712;</i>
                    <span> 新建文集</span>
                </div>
                <form action="" class="add-book">
                    <input type="text" class="add-book-text" v-model="bookValue" placeholder="请输入文集名...">
                    <button class="new-book-submit" @click.prevent="addBook">
                        <span>提交</span>
                    </button>
                    <button class="new-book-return">
                        <span>取消</span>
                    </button>
                </form>
                <div style="margin-top:40px;">
                    <ul class="diary-book" click="true">
                        <li class="diary-book-1" v-for="(book, index) in book"
                            :class="{'diary-book-active': bookCount === index}" @click="bookClick(index)" :key="index">
                            <span style="margin-right:20px;">{{book}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="new-chapter">
                <div class="new-chapter-icon" @click="newChapter">
                    <i class="iconfont-2">&#xe659;</i>
                    <span style="font-size:18px;"> 新建文章</span>
                </div>
                <ul class="diary-chapter" v-if="bookCount == 0">
                    <li class = "diary-chapter-1" v-for = "(diary, index) in diary" :class = "{'diary-chapter-active': diaryCount === index}"
                        @click="diaryClick(index)" :key="index">
                        <i class="iconfont" style="margin-left:10px;color:#000;">&#xe655;</i>
                        <span style="margin-top:10px;margin-left:20px;font-size:20px;">{{diary.date}}</span>
                        <span style="margin-top:40px;margin-left:40px;">{{diary.title}}</span>
                    </li>
                    <div  style="border-top:1px solid #d9d9d9; padding-top:10px; font-size:15px; cursor:pointer; color:rgb(153, 153, 153);">
                        <i class="iconfont-3" style="margin-right:5px;">&#xe712;</i>
                        <span>在下方新建文章</span>
                    </div>
                    <div style="width:300px; height:50px;margin-top:70px;margin-left:30px;">
                        <ul style="list-style:none;display:flex;justify-content:space-between;">
                            <li class="list-btn" >上一页</li>
                            <li class="page-num" >1</li>
                            <li class="page-num" >2</li>
                            <li class="page-num" >3</li>
                            <li class="page-num" >4</li>
                            <li class="page-num" >5</li>
                            <li class="list-btn" >下一页</li>
                        </ul>
                    </div>
                </ul>
                <ul class="diary-chapter" v-if="bookCount == 1">
                    <li class="diary-chapter-1" v-for="(note, index) in note" :class="{'diary-chapter-active': noteCount === index}"
                        @click="noteClick(index)" :key="index">
                        <i class="iconfont" style="margin-left:10px;color:#000;">&#xe610;</i>
                        <span style="margin-top:10px;margin-left:20px;font-size:20px;">{{note.date}}</span>
                        <span style="margin-top:40px;margin-left:40px;">{{note.title}}</span>
                    </li>
                    <div  style="border-top:1px solid #d9d9d9; padding-top:91px; font-size:15px; cursor:pointer; color:rgb(153, 153, 153);">
                        <i class="iconfont-3" style="margin-right:5px;">&#xe712;</i>
                        <span>在下方新建文章</span>
                    </div>
                    <div style="width:300px; height:50px;margin-top:70px;margin-left:30px;">
                        <ul style="list-style:none;display:flex;justify-content:space-between;">
                            <li class="list-btn" >上一页</li>
                            <li class="page-num" >1</li>
                            <li class="page-num" >2</li>
                            <li class="page-num" >3</li>
                            <li class="page-num" >4</li>
                            <li class="page-num" >5</li>
                            <li class="list-btn" >下一页</li>
                        </ul>
                    </div>
                </ul>
            </div>
            <div class="chapter-border">
            </div>
            <div class="chapter-write"  v-if="bookCount == 0">
                <div class="write-title">
                    <div style="width: 80%; display: flex; position: relative; justify-content: space-between;">
                        <input type="text" class="write-title-new" placeholder="请输入标题" v-if="diary[1].title" :value="diary[diaryCount].title">
                        <input type="date" class="write-title-date" :value="diary[diaryCount].date">
                    </div>
                    <div>
                        <button class="send-diary" @click="chapterSend">保存</button>
                    </div>
                </div>
                <div class="write-main">
                    <div contenteditable="true" class="write-main-new"><br>
                        {{diary[diaryCount].detail}}
                    </div>
                </div>
            </div>
            <div class="chapter-write"  v-if="bookCount == 1">
                <div class="write-title">
                    <div style="width: 80%; display: flex; position: relative; justify-content: space-between;">
                        <input type="text" class="write-title-new" placeholder="请输入标题" v-if="note[1].title" :value="note[noteCount].title">
                        <input type="date" class="write-title-date">
                    </div>
                    <div>
                        <button class="send-diary">保存</button>
                    </div>
                </div>
                <div class="write-main">
                    <div contenteditable="true" class="write-main-new"><br>
                        {{note[noteCount].detail}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
  data () {
    return {
      bookCount: 0,
      book: ['日记本', '随笔', '私密'],
      bookValue: '',
      diaryCount: 0,
      diary: [{
        date: '2019/09/02',
        title: '水调歌头',
        detail: '明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间？转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。'
      },
      {
        date: '2019/09/01',
        title: '如梦令',
        detail: '昨夜雨疏风骤，浓睡不消残酒。试问卷帘人，却道海棠依旧。知否，知否？应是绿肥红瘦。'
      },
      {
        date: '2019/08/31',
        title: '卜算子',
        detail: '我住长江头，君住长江尾。日日思君不见君，共饮长江水。此水几时休，此恨何时已。只愿君心似我心，定不负相思意。'
      },
      {
        date: '2019/8/30',
        title: '醉花阴',
        detail: '薄雾浓云愁永昼，瑞脑销金兽。佳节又重阳，玉枕纱橱，半夜凉初透。东篱把酒黄昏后，有暗香盈袖。莫道不销魂，帘卷西风，人比黄花瘦。'
      },
      {
        date: '2019/08/29',
        title: '浪淘沙令',
        detail: '帘外雨潺潺，春意阑珊。罗衾不耐五更寒。梦里不知身是客，一晌贪欢。独自莫凭栏，无限江山，别时容易见时难。流水落花春去也，天上人间。'
      },
      {
        date: '2019/08/28',
        title: '清平乐',
        detail: '年年雪里，常插梅花醉。挼尽梅花无好意，赢得满衣清泪。今年海角天涯，萧萧两鬓生华。看取晚来风势，故应难看梅花。'
      }],
      noteCount: 0,
      note: [{
        date: '2019/09/01',
        title: '九月份计划',
        detail: '天高云淡，望断南飞雁。不到长城非好汉，屈指行程二万。六盘山上高峰，红旗漫卷西风。今日长缨在手，何时缚住苍龙？'
      },
      {
        date: '2019/08/01',
        title: '八月份计划',
        detail: '山下旌旗在望，山头鼓角相闻。敌军围困万千重，我自岿然不动。早已森严壁垒，更加众志成城。黄洋界上炮声隆，报道敌军宵遁。'
      },
      {
        date: '2019/07/01',
        title: '七月份计划',
        detail: '人生易老天难老，岁岁重阳。今又重阳，战地黄花分外香。一年一度秋风劲，不似春光。胜似春光，廖廓江天万里霜。'
      }, {
        date: '2019/06/01',
        title: '六月份计划',
        detail: '飒爽英姿五尺枪，曙光初照演兵场。中华儿女多奇志，不爱红装爱武装'
      }, {
        date: '2019/05/01',
        title: '五月份计划',
        detail: '钟山风雨起苍黄，百万雄师过大江。虎踞龙盘今胜昔，天翻地覆慨而慷。宜将剩勇追穷寇，不可沽名学霸王。天若有情天亦老，人间正道是沧桑。'
      }]
    }
  },
  methods: {
    diaryClick (index) {
      this.diaryCount = index
    },
    bookClick (index) {
      this.bookCount = index
    },
    noteClick (index) {
      this.noteCount = index
    },
    addBook () {
      this.book.push(this.bookValue)
      this.bookValue = ''
    },
    newChapter () {
      this.diary.unshift({
        date: window.date,
        title: '',
        detail: '行到水穷处，坐看云起时'
      })
    },
    chapterSend () {
      alert('保存成功！')
    }
  },
  mounted () {
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
.diary{
    border-top: solid 2px #e7e8e8;
    display: flex;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    height: 100%;
}
.diary .detail{
    background-color: #404040;
    width: 15%;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.add{
    font-size: 20px;
    margin-top: 30px;
    cursor: pointer;
    color: #F2F2F2;
}
.add-book-text{
    margin-top: 20px;
    width: 90%;
    height: 35px;
    border: none;
    font-size: 15px;
    color: #ccc;
    padding-left: 10px;
    outline: none;
    background-color: #595959;
}
.new-book-submit{
    margin-top: 20px;
    color: #42c02e;
    border-color: #42c02e;
    background-color: #404040;
    outline: none;
    cursor: pointer;
    position: relative;
    display: inline-block;
    text-align: center;
    height: 30px;
    line-height: 20px;
    padding: 4px 12px;
    border: 1px solid;
    border-radius: 15px;
    font-size: 20px;
    font-weight: 500;
}
.new-book-return{
    margin-top: 20px;
    margin-left: 20px;
    color: #ccc;
    background-color: #404040;
    outline: none;
    cursor: pointer;
    position: relative;
    display: inline-block;
    text-align: center;
    height: 30px;
    line-height: 20px;
    padding: 4px 12px;
    border: none;
    border-radius: 15px;
    font-size: 18px;
    font-weight: 500;
}
.diary-book{
    margin-left: -40px;
    width: 100%;
    color: #ccc;
    list-style: none;
    font-size: 20px;
}
.diary-book-1{
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    height: 40px;
    text-align: center;
}
.diary-book-1:hover{
    background-color: #595959;
    border-left: 5px solid #ec7259;

}
.diary-book-active{
    background-color: #595959;
    border-left: 5px solid #ec7259;
}

#clock {
  font-family: 'Share Tech Mono', monospace;
  color: #000;
  background-color: gray;
  width: 200px;
  height: 150px;
  text-align: center;
  position: relative;
  top:30%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}
#clock .time {
  letter-spacing: 0.05em;
  font-size: 60px;
  padding: 5px 0;
}
#clock .date {
  letter-spacing: 0.1em;
  font-size: 24px;
}

.diary .main{
    display: flex;
    border-left:solid 2px;
    width: 85%;
}
.main .new-chapter{
    width: 25%;
    height: 100%;
}
.new-chapter-icon{
    margin-top: 20px;
    cursor: pointer;
}
.diary-chapter{
    list-style: none;
    margin-left: -40px;
    margin-top: 20px;
    text-align: center;
    width: 100%;
    height: 80%;
}
.iconfont-2 {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.diary-chapter-1{
    display: flex;
    font-size: 20px;
    width: 100%;
    height: 80px;
    cursor: pointer;
    border-top: 1px solid #d9d9d9;
}
.diary-chapter-1:hover{
    border-left: 5px solid #ec7259;
    background-color: #e6e6e6;
}
.diary-chapter-active{
    border-left: 5px solid #ec7259;
    background-color: #e6e6e6;
}
.iconfont-3 {
  font-family: "iconfont" !important;
  font-size: 15px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main .chapter-border{
    width: 2%;
    height: 100%;
    border-left: 1px solid #e7e8e8;
    border-right: 1px solid #d9d9d9;
    background-color: #fafafa;
}
.main .chapter-write{
    width: 72%;
    height: 100%;
    text-align: center;
}
.write-title{
    width: 100%;
    height: 70px;
    display:flex;
    justify-content:space-between;
    position:relative;
    padding-bottom:1px;
    border-bottom: 1px solid #e7e8e8;
}
.send-diary{
    background: none;
    border: none;
    width:130px;
    height: 50px;
    margin-top: 10px;
    padding-left:20px;
    outline: none;
    cursor: pointer;
    font-size: 20px;
    letter-spacing: 10px;
    border-radius: 50px;
    color: #42c02e;
    border: 1px solid #42c02e;
}
.send-diary:hover{
    background-color:#42c02e;
    color:#fff;
}
.write-title-new{
    width: 80%;
    height: 68px;
    padding-left: 3%;
    line-height: 70px;
    font-size: 30px;
    outline: none;
    border: none;
}
.write-title-date{
    width: 20%;
    height: 99%;
    border: none;
    border-right: 2px solid #f1f1f1;
    font-size: 20px;
    outline: none;
}
.write-main-new{
    width: 80%;
    height: 80%;
    outline: none;
    line-height: 50px;
    font-size: 23px;
    text-align: left;
    padding-left: 20px;
}
.list-btn{
    cursor: pointer;
}
.list-btn:hover{
    color: #42c02e;
}
.page-num{
    width:20px;
    height:20px;
    border:1px solid #000;
    cursor:pointer;
}
.page-num:hover{
    color: #42c02e;
    border-color: #42c02e;
}
</style>
