<template>
  <div class="world" v-show="showFlag">
    <back></back>
    <div id="earth" class="earth" ref="earth"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import back from '@/components/back/back'
<<<<<<< HEAD
import Earth from '@/assets/js/earth'
=======
// import Earth from '@/assets/js/earth'
// import Galaxy from '@/assets/js/galaxy'
>>>>>>> 9a0468ccc0a3076ffd6e8c3d13b90df6df20d52d

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
<<<<<<< HEAD
    this.earth = new Earth('earth')

=======
    // let earth = new Earth('earth')
    // this.earth = earth
    // let galaxy = new Galaxy('star')
    // this.galaxy = galaxy
>>>>>>> 9a0468ccc0a3076ffd6e8c3d13b90df6df20d52d
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
