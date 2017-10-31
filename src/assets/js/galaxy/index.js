import {random} from '../util'
import {stars, hue, maxStars} from '../constant'
import {canvas2} from './glittering'
// let canvas = document.getElementById('galaxy')
// console.log(canvas)
// let ctx = canvas.getContext('2d')
// this.ctx = ctx
let w = 320 // canvas.width = 320 // window.innerWidth
let h = 474  // canvas.height = 480 // window.innerHeight
  // let count = 0

var Star = function (cav, ctx) {
  this.cav = cav
  this.ctx = cav.getContext('2d')
  // 轨道半径
  this.orbitRadius = random(w) // random(w / 2 - 50)
  this.radius = random(100, this.orbitRadius) / 10
  this.orbitX = w / 2
  this.orbitY = h / 2
  this.timePassed = random(0, maxStars)
  this.speed = random(this.orbitRadius) / 3000000
  this.alpha = random(2, 10) / 10
}

Star.prototype.draw = function () {
  console.log(1)
  let ctx = this.ctx
  let x = Math.sin(this.timePassed + 60) * this.orbitRadius + this.orbitX
  let y = Math.cos(this.timePassed) * this.orbitRadius / 2 + this.orbitY
  // 闪烁
  let twinkle = random(10)

  if (twinkle === 1 && this.alpha > 0) {
    this.alpha -= 0.05
  } else if (twinkle === 2 && this.alpha < 1) {
    this.alpha += 0.05
  }
// 控制星星闪烁
  ctx.globalAlpha = this.alpha
  ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius)
  this.timePassed += this.speed
}

Star.prototype.animation = function () {
  let ctx = this.ctx
  // 关于globalCompositeOperation http://www.w3school.com.cn/tags/canvas_globalcompositeoperation.asp
  ctx.globalCompositeOperation = 'source-over'
  ctx.globalAlpha = 0.5
  ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)'
  ctx.fillRect(0, 0, w, h)

  ctx.globalCompositeOperation = 'lighter'
  for (var i = 1, l = stars.length; i < l; i++) {
    stars[i].draw()
  }
}

export default Star
