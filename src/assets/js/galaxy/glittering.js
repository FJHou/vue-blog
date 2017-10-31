import {hue} from '../constant'

export const canvas2 = document.createElement('canvas')

const ctx2 = canvas2.getContext('2d')
canvas2.width = 100
canvas2.height = 100
const half = canvas2.width / 2
let gradient2 = ctx2.createRadialGradient(half, half, 1, half, half, half)
// createRadialGradient(x0,y0,r0,x1,y1,r1) 创建放射状/圆形渐变对象
// x0 渐变的开始圆的 x 坐标
// y0 渐变的开始圆的 y 坐标
// r0 开始圆的半径
// x1 渐变的结束圆的 x 坐标
// y1 渐变的结束圆的 y 坐标
// r1 结束圆的半径
gradient2.addColorStop(0.025, '#fff')
// gradient.addColorStop(stop,color)
// stop   介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置。
// color  在结束位置显示的 CSS 颜色值
gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)')
gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)')
gradient2.addColorStop(1, 'transparent')

ctx2.fillStyle = gradient2
ctx2.beginPath()
// 绘制圆形
// context.arc(x,y,r,sAngle,eAngle,counterclockwise)
// 参数 描述
// x  圆的中心的 x 坐标。
// y  圆的中心的 y 坐标。
// r  圆的半径。
// sAngle 起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）。
// eAngle 结束角，以弧度计。
// counterclockwise 可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。
ctx2.arc(half, half, half, 0, Math.PI * 2)
ctx2.fill()

