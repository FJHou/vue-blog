import {random} from '../util'
import {stars, count, hue, maxStars} '../constant'
import {canvas2} from './glittering.js'
var Star = function(canvas) {
  let canvas = document.getElementById(canvas)
  this.ctx = canvas.getContext('2d')
  let w = this.w = canvas.width = window.innerWidth
  let h = this.h = canvas.height = window.innerHeight

  // 轨道半径
  this.orbitRadius = random(w) // random(w / 2 - 50)
  this.radius = random(100, this.orbitRadius) / 10
  this.orbitX = w / 2
  this.orbitY = h / 2
  this.timePassed = random(0, maxStars)
  this.speed = random(this.orbitRadius) / 3000000
  this.alpha = random(2, 10) / 10

  count++
  stars[count] = this

  this.init()
}

Star.prototype.init = function() {
  this.creatStar()
  this.animation()
}

Star.prototype.draw = function() {
  let ctx = this.ctx
  let x = Math.sin(this.timePassed + 60) * this.orbitRadius + this.orbitX
  let y = Math.cos(this.timePassed) * this.orbitRadius/2 + this.orbitY
  // 闪烁
  let twinkle = random(10)

  if (twinkle === 1 && this.alpha > 0) {
    this.alpha -= 0.05
  } else if (twinkle === 2 && this.alpha < 1) {
    this.alpha += 0.05
  }
// 控制星星闪烁
  ctx.globalAlpha = this.alpha

// 在画布上定位图像：
// JavaScript 语法： context.drawImage(img,x,y)
//  --------------------------------------------------------------
// 在画布上定位图像，并规定图像的宽度和高度：
// JavaScript 语法： context.drawImage(img,x,y,width,height)
//  --------------------------------------------------------------
// 剪切图像，并在画布上定位被剪切的部分：
// JavaScript 语法： context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
//  --------------------------------------------------------------
// img  规定要使用的图像、画布或视频。
// sx 可选。开始剪切的 x 坐标位置。
// sy 可选。开始剪切的 y 坐标位置。
// swidth 可选。被剪切图像的宽度。
// sheight  可选。被剪切图像的高度。
// x  在画布上放置图像的 x 坐标位置。
// y  在画布上放置图像的 y 坐标位置。
// width  可选。要使用的图像的宽度（伸展或缩小图像）。
// height 可选。要使用的图像的高度（伸展或缩小图像）。
  ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius)
  this.timePassed += this.speed
}

Star.prototype.creatStar = function() {
  for (var i = 0 i < maxStars i++) {
    new Star().draw()
  }
}

Star.prototype.animation = function() {
  console.log(stars)
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
    window.requestAnimationFrame(this.animation()).bind(this)
}

// function animation () {
//   // 关于globalCompositeOperation http://www.w3school.com.cn/tags/canvas_globalcompositeoperation.asp
//     ctx.globalCompositeOperation = 'source-over'
//     ctx.globalAlpha = 0.5
//     ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)'
//     ctx.fillRect(0, 0, w, h)

//   ctx.globalCompositeOperation = 'lighter'
//   for (var i = 1, l = stars.length i < l i++) {
//     stars[i].draw()
//   }
//     window.requestAnimationFrame(animation)
// }

// animation()

export default Star
