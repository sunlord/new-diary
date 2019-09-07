import { showCurrentDot, index, dots } from '../components/about.vue'

function checkDots () {
  var wrap = document.querySelector('.scroll-wrap')
  for (var i = 0, len = dots.length; i < len; i++) {
    (function (i) {
      dots[i].onclick = function () {
        var dis = index - i
        if (index === 4 && parseInt(wrap.style.left) !== -5000) {
          dis = dis - 5
        }
        // 和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
        if (index === 0 && parseInt(wrap.style.left) !== -1000) {
          dis = 5 + dis
        }
        wrap.style.left = (parseInt(wrap.style.left) + dis * 1000) + 'px'
        this.index = i
        showCurrentDot()
      }
    })(i)
  }
}

export {
  checkDots
}
