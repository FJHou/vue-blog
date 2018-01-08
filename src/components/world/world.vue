<template>
  <div class="world" v-show="showFlag">
    <back></back>
    <div id="earth" class="earth" ref="earth"></div>
    <canvas id="galaxy" class="galaxy"></canvas>
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
  },
  methods: {

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
      background-color transparent
  .galaxy
    z-index -1
    position absolute
    top 0
    left 0
    width 100%
    height 100%
</style>
