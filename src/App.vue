<template>
  <div id="app">
    <v-app>
      <Bmenu></Bmenu>
      <!-- <Bhead></Bhead> -->
      <!-- <Bnav></Bnav> -->
      <Btab></Btab>
      <transition name="slide">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
      <!-- <VideoBg></VideoBg> -->
    </v-app>
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
  import Btab from '@/components/tab/tab'
  import Bmenu from 'components/menu/menu'
  // import VideoBg from '@/components/video-bg/video-bg'
  // import Bnav from '@/components/nav/nav'
  // import Bhead from '@/components/header/header'
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
      Btab,
      Bmenu,
      // Bnav,
      // Bhead,
      // VideoBg
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
