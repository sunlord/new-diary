<template>
  <div id="detail" class="detail-html">
    <div class="detail-main">
        <div class="detail-left">
            <ul class="detail-left-ul">
                <li  v-for="(list, index) in list" class="detail-left-li" :class="{'active':cla === index}"
                @click="changeBg(index)" :key="index">
                    {{list}}
                </li>
            </ul>
        </div>
        <div class="detail-right">
            <table style="margin-left: 30px; border-collapse:collapse;" v-if="cla == 0">
                <tbody>
                    <tr class="head-image-tr">
                        <td class="head-image-td">
                            <div class="head-image-display">
                                <img style="width:100%;" src="../../icons/headimg.png" alt="">
                            </div>
                        </td>
                        <td class="head-image-update">
                            <button class="head-image-update-btn">
                                <span>更换头像</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="detail-right-name">
                        <td style="text-align:left;">昵称</td>
                        <td>
                            <input type="text" class="detail-right-name-input" placeholder="请输入昵称">
                        </td>
                    </tr>
                    <tr class="detail-right-sex">
                        <td style="text-align:left;">性别</td>
                        <td>
                            <input name="sex" type="radio" value="1" style="margin-left:-100px;">
                            <span style="margin-left:10px;">男</span>
                            <input name="sex" type="radio" value="2" style="margin-left:20px;">
                            <span style="margin-left:10px;">女</span>
                            <input name="sex" type="radio" value="3" checked="checked" style="margin-left:20px;">
                            <span style="margin-left:10px;">保密</span>
                        </td>
                    </tr>
                    <tr class="detail-right-personal-web">
                        <td style="text-align:left;">个人网站</td>
                        <td>
                            <input type="text" class="detail-right-personal-web-input" placeholder="https://你的网址">
                        </td>
                    </tr>
                    <tr class="detail-right-personal-text">
                        <td style="text-align:left;">个人简介</td>
                        <td>
                            <textarea type="text" class="detail-right-personal-text-textarea" placeholder="填写你的个人简介">
                            </textarea>
                        </td>
                    </tr>
                </tbody>
                <button class="detail-right-btn">
                    <span>保存</span>
                </button>
            </table>
            <table style="margin-left: 30px; margin-top: 60px; border-collapse:collapse;" v-if="cla == 1">
                <tbody>
                    <tr>
                        <div style="margin-bottom:30px;">
                            <span style="font-size: 20px;">请存留您的密码，请勿泄露给他人</span>
                        </div>
                    </tr>
                    <tr class="detail-right-update">
                        <td style="text-align:left;">修改密码</td>
                        <td>
                            <input type="password" class="detail-right-update-input" placeholder="请输入原密码">
                        </td>
                    </tr>
                    <tr class="detail-right-update">
                        <td style="text-align:left;">新密码</td>
                        <td>
                            <input type="password" class="detail-right-update-input" placeholder="请输入新密码">
                        </td>
                    </tr>
                    <tr class="detail-right-update">
                        <td style="text-align:left;">重复输入</td>
                        <td>
                            <input type="password" class="detail-right-update-input" placeholder="请确认新密码">
                        </td>
                    </tr>
                </tbody>
                <button class="detail-right-btn2">
                    <span>修改</span>
                </button>
            </table>
            <table style="margin-left: 30px; border-collapse:collapse;" v-if="cla == 2">
                <tbody>
                    <tr>
                        <ul style="text-align:left;">
                            <li style="list-style: none;font-size:20px;">永久删除帐号</li><br>
                            <li>如果你不小心创建出了多余的帐号，你可以给管理员留言，以获得相关帮助。</li><br>
                            <li>如果你对维尼记上的某些内容、功能或规则不满意，你可以留言向我提出。</li><br>
                            <li>删除帐号前，请确保已经没有任何文章。</li><br>
                            <li>删除帐号是不可逆的操作，删除后将无法恢复。</li><br>
                        </ul>
                    </tr>
                    <tr class="detail-right-name">
                        <td style="text-align:left;">请输入密码</td>
                        <td>
                            <input type="password" class="detail-right-name-input" placeholder="请输入密码">
                        </td>
                    </tr>
                    <tr class="detail-right-name">
                        <td style="text-align:left;">再次确认密码</td>
                        <td>
                            <input type="password" class="detail-right-name-input" placeholder="请再次确认密码">
                        </td>
                    </tr>
                </tbody>
                <button class="detail-right-btn3">
                    <span>注销</span>
                </button>
            </table>
            <table style="margin-left: 30px; border-collapse:collapse;" v-if="cla == 3">
                <tbody>
                    <tr class="detail-right-name">
                        <td style="text-align:left;">主题</td>
                        <td>
                            <input type="text" class="detail-right-message-input" placeholder="请输入主题">
                        </td>
                    </tr>
                    <tr class="detail-right-name">
                        <td style="text-align:left;">内容</td>
                        <td>
                            <textarea class="detail-right-message-textarea" name="" id="" cols="30" rows="10"></textarea>
                        </td>
                    </tr>
                </tbody>
                <button class="detail-right-btn4">
                    <span>发送</span>
                </button>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      list: ['个人资料', '账号管理', '注销账号', '联系管理'],
      cla: 0
    }
  },
  methods: {
    changeBg (index) {
      this.cla = index
    }
  }
}
</script>

<style>
.detail-html{
    border-top: solid 2px #e7e8e8;
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.detail-main{
    display: flex;
    margin-top: 30px;
    width:50%;
    height: 80%;
/*     background-color: #f1f1f1; */
}
.detail-left{
    position: relative;
    width: 30%;
    height: 100%;
    border-right: 1px solid #e7e8e8;
/*     background-color: #f9f9f9; */
}
.detail-left-ul{
    margin: 0px;
    overflow: hidden;
    list-style: none;
}
.detail-left-li{
    padding-top: 15px;
    margin-left: -40px;
    height: 40px;
    cursor: pointer;
}
.detail-left-li:hover{
    background-color: #f0f0f0;
    color:#000;
    border-radius: 5px;
}
.active{
    background-color: #f0f0f0;
    border-radius: 5px;
    color:#000;
}

.detail-right{
    display: flex;
    flex-direction: column;
    position: relative;
    width:70%;
    height: 100%;
    overflow: hidden;
/*     background-color: #f9f9f9; */
}
.head-image-tr{
    width: 100%;
    height: 150px;
    border-bottom: 1px solid #e7e8e8;
}
.head-image-display{
    width: 100px;
    height: 100px;
    margin-left: -10px;
    overflow: hidden;
    border: 1px solid #e7e8e8;
    border-radius: 100%;
}
.head-image-update-btn{
    margin-left: -200px;
    width: 80px;
    height: 40px;
    color: #42c02e;
    font-size: 15px;
    outline: none;
    cursor: pointer;
    background: none;
    border: 1px solid #42c02e;
    border-radius: 20px;
}
.head-image-update-btn:hover{
    color: #42c0ee;
    border-color: #42c0ee;
}
.detail-right-name{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #e7e8e8;
}
.detail-right-name-input{
    font-size:15px;
    margin-left: -60px;
    width:200px;
    height: 30px;
    outline: none;
    padding: 3px 10px;
    line-height:15px;
    border-radius: 3px;
    border: 1px solid #e7e8e8;
    /* background-color: #f9f9f9; */
    background: none;
}
.detail-right-update{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #e7e8e8;
}
.detail-right-update-input{
    font-size:15px;
    margin-left: 80px;
    width:200px;
    height: 30px;
    outline: none;
    padding: 3px 10px;
    line-height:15px;
    border-radius: 3px;
    border: 1px solid #e7e8e8;
    /* background-color: #f9f9f9; */
    background: none;
}
.detail-right-sex{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #e7e8e8;
}
.detail-right-personal-web{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #e7e8e8;
}
.detail-right-personal-web-input{
    font-size:15px;
    margin-left:30px;
    width:300px;
    height: 30px;
    outline: none;
    padding: 3px 10px;
    line-height:15px;
    border-radius: 3px;
    border: 1px solid #e7e8e8;
    /* background-color: #f9f9f9; */
}
.detail-right-personal-text{
    width: 100%;
    height: 120px;
    border-bottom: 1px solid #e7e8e8;
}
.detail-right-personal-text-textarea{
    font-size: 15px;
    margin-left: 30px;
    width: 300px;
    height: 80px;
    outline: none;
    padding: 5px 10px;
    line-height: 15px;
    border-radius: 3px;
    border: 1px solid #e7e8e8;
    /* background-color: #f9f9f9; */
}
.detail-right-message-input{
    width: 500px;
    height: 60px;
    font-size: 18px;
    line-height: 18px;
    outline: none;
    padding: 2px 10px;
    border: none;
}
.detail-right-message-textarea{
    width: 500px;
    height: 500px;
    font-size: 18px;
    line-height: 18px;
    outline: none;
    padding: 2px 10px;
    margin-top: 20px;
    border: none;
}
.detail-right-btn{
    width: 90px;
    height: 30px;
    margin-top: 20px;
    margin-left: -60px;
    font-size: 15px;
    color:#fff;
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 30px;
    background-color: #42c02e;
}
.detail-right-btn:hover{
    background-color: #42c0ee;
}
.detail-right-btn2{
    width: 90px;
    height: 30px;
    margin-top: 20px;
    font-size: 15px;
    color:#fff;
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 30px;
    background-color: #42c02e;
}
.detail-right-btn2:hover{
    background-color: #42c0ee;
}
.detail-right-btn3{
    width: 90px;
    height: 30px;
    margin-top: 20px;
    margin-left: -200px;
    font-size: 15px;
    color:#fff;
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 30px;
    background-color: #42c02e;
}
.detail-right-btn3:hover{
    background-color: #42c0ee;
}
.detail-right-btn4{
    width: 90px;
    height: 30px;
    margin-top: 20px;
    font-size: 15px;
    color:#fff;
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 30px;
    background-color: #42c02e;
}
.detail-right-btn4:hover{
    background-color: #42c0ee;
}

</style>
