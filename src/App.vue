<template>
  <div id="app">
    <Scroll :data="data" class="scroll-wrapper">
      <div>
        <Info></Info>
        <div class="section section-two">

        </div>
        <div class="section section-three">

        </div>
      </div>
    </Scroll>
  </div>
</template>

<script type="text/babel">
  import Scroll from 'base/scroll/scroll'
  import Info from 'components/info/info'

  export default {
    name: 'app',
    data () {
      return {
        data: []
      }
    },
    created () {

    },
    methods: {

    },
    components: {
      Scroll,
      Info
    }
  }
</script>

<style lang="stylus">
  // @import 'common/stylus/variable'

  #app
    height 100%
    background-color #f9f9f9
    .scroll-wrapper
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      overflow hidden
      .section
        height 400px
      .section-two
        background #000
      .section-three
        background pink
</style>
