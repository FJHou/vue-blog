<template>
  <div id="app">
    <Bhead></Bhead>
    <Bnav></Bnav>
    <Btab></Btab>
    <transition name="slide">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <VideoBg></VideoBg>
  </div>
</template>

<script type="text/babel">
  import Btab from '@/components/tab/tab'
  import VideoBg from '@/components/video-bg/video-bg'
  import Bnav from '@/components/nav/nav'
  import Bhead from '@/components/header/header'
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
      Btab,
      Bnav,
      Bhead,
      VideoBg
    }
  }
</script>

<style lang="stylus">
  @import 'common/stylus/variable'

  #app
    height 100%
    background-color #ddd 
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
