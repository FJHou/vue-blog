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
  </div>
</template>

<script type="text/babel">
  import Btab from '@/components/tab/tab'
  import Bmenu from 'components/menu/menu'
  // import VideoBg from '@/components/video-bg/video-bg'
  // import Bnav from '@/components/nav/nav'
  // import Bhead from '@/components/header/header'
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
      Bmenu
      // Bnav,
      // Bhead,
      // VideoBg
    }
  }
</script>

<style lang="stylus">
  #app
    height 100%
    background-color #ddd 
</style>
