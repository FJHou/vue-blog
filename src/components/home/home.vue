<template>
  <div class="home" v-show="showFlag">
    <back></back>
  </div>
</template>

<script type="text/ecmascript-6">
  import back from '@/components/back/back'

  export default {
    data () {
      return {
        showFlag: true
      }
    },
    created () {

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
  .home
    position absolute
    top: 50px
    bottom 50px
    width 100%
    // height 100%
    background-color rgba(0, 0, 0, .6)
    // transform translate3d(100%, 0 ,0)
</style>
