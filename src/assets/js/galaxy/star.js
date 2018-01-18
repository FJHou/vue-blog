import { random } from '../util'
import starBlink from './blink.js'
class Star {
  constructor (ctx) {
    this.x = 375
    this.y = 667
    this.ctx = ctx
    this.orbitRadius = random(this.maxOrbit(this.w, this.h))
    this.radius = random(60, this.orbitRadius) / 8 
    // 星星大小
    this.orbitX = 375 / 2
    this.orbitY = 667 / 2
    this.maxStars = 1300
    this.timePassed = random(0, this.maxStars)
    this.speed = random(this.orbitRadius) / 50000 
    // 星星移动速度
    this.alpha = random(2, 10) / 10

  }
  draw () {
    var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
      y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
      twinkle = random(10)
  
    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05
    }
    console.log(starBlink)
    this.ctx.globalAlpha = this.alpha
    this.ctx.drawImage(starBlink, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius)
    this.timePassed += this.speed
  }

  maxOrbit(x, y) {
    let max = Math.max(x, y)
    let diameter = Math.round(Math.sqrt(max * max + max * max))
    return diameter / 2
    //星星移动范围，值越大范围越小，
  }
}

export default Star
