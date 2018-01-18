<template>
  <div class="world" v-show="showFlag">
    <back></back>
    <div id="earth" class="earth" ref="earth"></div>
    <canvas id="galaxy" class="galaxy"></canvas>
  </div>
</template>

<script type="text/ecmascript-6">
import back from '@/components/back/back'
// import Earth from '@/assets/js/earth'
import Galaxy from '@/assets/js/galaxy'

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
    let galaxy = new Galaxy('galaxy')
    console.log(galaxy)
    this.galaxy = galaxy
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
    top: 0
    bottom 0
    left 0
    right 0
    background rgba(0, 0, 0, .6)
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
