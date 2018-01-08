// import starBlink from './blick.js'
import Star from './star'

class Galaxy {
  custructor (cav) {
    let canvas = document.getElementById(cav)
    this.ctx = canvas.getContext('2d')
    this.w = canvas.width = window.innerWidth
    this.h = canvas.height = window.innerHeight
    this.hue = 217
    this.stars = []
    this.count = 0
    this.maxStars = 1300
    this.createStar()
    this.animation()
  }

  createStar () {
    for (var i = 0; i < this.maxStars; i++) {
      let star = new Star()
      this.stars.push(star)
      this.count++
    }
  }

  animation () {
    this.ctx.globalCompositeOperation = 'source-over'
    this.ctx.globalAlpha = 0.5 // 尾巴
    this.ctx.fillStyle = 'hsla(' + this.hue + ', 64%, 6%, 2)'
    this.ctx.fillRect(0, 0, this.w, this.h)
    this.ctx.globalCompositeOperation = 'lighter'
    for (var i = 1, l = this.stars.length; i < l; i++) {
      this.stars[i].draw()
    }
    window.requestAnimationFrame(this.animation)
  }
}

export default Galaxy
