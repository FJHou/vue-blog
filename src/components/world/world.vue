<template>
  <div class="world" v-show="showFlag">
    <back></back>
    <div id="earth" class="earth" ref="earth"></div>
    <!-- <canvas id="galaxy" class="galaxy"></canvas> -->
  </div>
</template>

<script type="text/ecmascript-6">
import back from '@/components/back/back'
import Earth from '@/assets/js/earth'
// import Star from '@/assets/js/galaxy'
// import {stars, hue, maxStars} from 'assets/js/constant'

export default {
  props: {
    route: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showFlag: true,
      canvas: null
    }
  },
  mounted () {
    let earth = new Earth('earth')
    this.$options = earth
    // this._creatGalaxy()
    // this._starAnimate()
    // var cvs = document.getElementsByName('canvas')
    // console.log(earth)
  },
  methods: {
    // _creatGalaxy () {
    //   this.canvas = document.getElementById('galaxy')

    //   for (let i = 0; i < maxStars; i++) {
    //     stars[i] = new Star(this.canvas)
    //   }
    // },
    // _starAnimate () {
    //   let ctx = this.canvas.getContext('2d')
    //   let w = 320
    //   let h = 474
    //   // 关于globalCompositeOperation http://www.w3school.com.cn/tags/canvas_globalcompositeoperation.asp
    //   ctx.globalCompositeOperation = 'source-over'
    //   ctx.globalAlpha = 0.5
    //   ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)'
    //   ctx.fillRect(0, 0, w, h)

    //   ctx.globalCompositeOperation = 'lighter'
    //   for (var i = 1, l = stars.length; i < l; i++) {
    //     stars[i].draw()
    //   }
    //   // window.requestAnimationFrame(this._starAnimate())
    // }
  },
  components: {
    back
  }
}
</script>

<style lang="stylus">
  @import "../../common/stylus/variable"
  .world
    position absolute
    top: 50px
    bottom 50px
    width 100%
    background-color rgba(24, 65, 105, .6)
    .earth
      width: 100%
      height 100%
  .galaxy
    z-index 1
    position absolute
    top 0
    left 0
    width 100%
    height 100%
</style>
