<template>
  <div class="world" v-show="showFlag">
    <back></back>
    <div id="earth" class="earth" ref="earth"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import back from '@/components/back/back'
import Earth from '@/assets/js/earth'

export default {
  props: {
    route: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showFlag: true
    }
  },
  mounted () {
    console.log(this.route)
    let earth = new Earth(this.$refs.earth)
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
      height 100%
</style>
