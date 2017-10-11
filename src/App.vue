<template>
  <div id="app">
    <!-- <Bhead></Bhead> -->
    <Btab></Btab>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/babel">
  import Btab from '@/components/tab/tab'

  export default {
    name: 'app',
    data () {
      return {

      }
    },
    created () {

    },
    methods: {

    },
    components: {
      Btab
    }
  }
</script>

<style lang="stylus">
  @import 'common/stylus/variable'

  #app
    height 100%
    background-color $color-background40

    // tranform: translate3d(100%, 0, 0)
  .bgColorChange
    animation changeColor 5s infinite
    animation-direction:alternate
  .slide-enter-active, .slide-leave-active {
    transition: all .5s ease;
  }

  .slide-enter, .slide-leave-to {
    opacity: 0;
    // transform: translate3d(100%, 0, 0)
  }

  @keyframes changeColor
    from
      background-color $color-background0
    to
      background-color $color-background40
</style>
