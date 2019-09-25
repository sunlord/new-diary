<template>
    <div class="welcome">
        <div style="height:100px;"></div>
        <HelloWorld msg="维尼记，记录你的成长" />
        <img src="../../icons/logo.png" alt="">
        <div style="height:10px;"></div>
        <!-- 使用路径跳转 -->
        <router-link to="/login" class="link">
            <a class="hello-button">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                    通商宽衣
            </a>
        </router-link>
    </div>
</template>

<script>
import HelloWorld from './HelloWorld'

export default {
  components: {
    HelloWorld
  }
}
</script>

<style>
.link{
    font-size: 25px;
}
.welcome{
    border-top: solid 2px #e7e8e8;
    width: 100%;
    height: 100%;
    /* background-color: #f1f1f1; */
    position: absolute;
}
.hello-button{
    position: absolute;
    top: 68%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #0b1d48;
    padding: 30px 60px;
    font-size: 30px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    box-shadow: 0 20px 50px rgba(0, 0, 0, .5);
    overflow: hidden;
}
.hello-button::before{
    content: '';
    top: 2px;
    left: 2px;
    bottom: 2px;
    width: 50%;
    background: rgba(255, 255, 255, 0.05);
}
.hello-button span:nth-child(1){
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #f15b1d, #ed9b2b);
    animation: animate1 2s linear infinite;
    animation-delay: 1s;
}
@keyframes animate1{
    0%
    {
        transform: translateX(-100%);
    }
    100%
    {
        transform: translateX(100%);
    }
}
.hello-button span:nth-child(2){
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #f15b1d, #ed9b2b);
    animation: animate2 2s linear infinite;
}
@keyframes animate2{
    0%
    {
        transform: translateY(-100%);
    }
    100%
    {
        transform: translateY(100%);
    }
}
.hello-button span:nth-child(3){
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to left, #f15b1d, #ed9b2b);

    animation: animate3 2s linear infinite;
    animation-delay: 1s;
}
@keyframes animate3{
    0%
    {
        transform: translateX(100%);
    }
    100%
    {
        transform: translateX(-100%);
    }
}
.hello-button span:nth-child(4){
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to top, #f15b1d, #ed9b2b);

    animation: animate4 2s linear infinite;
}
@keyframes animate4{
    0%
    {
        transform: translateY(100%);
    }
    100%
    {
        transform: translateY(-100%);
    }
}
.sa-words{
    width: 120px;
    height: 120px;
    font-size: 25px;
    border: 2px solid #e7e8e8;
    /* background-color: #f1f1f1; */
    border-radius: 50%;
    cursor:pointer;
    outline: none;
}
.sa-words:hover{
    border: 1px solid red;
    background-color: #ed9b2b;
}

</style>
