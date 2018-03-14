<template>
  <div class="menu-wrapper" :class="[{'open': open}]">
    <div class="menu" @click="toggleOpen">
      <i class="line line1"></i>
      <i class="line line2"></i>
      <i class="line line3"></i>
    </div>
    <!-- 背景 -->
    <div class="expand-pannel"></div>
      <ul class="text-list">
        <router-link tag="li" class="tab-item tab-home" to="/home">
          <i class="icon-home-icon-silhouette"></i>
          <span>Home</span>
        </router-link>
        <router-link tag="li" class="tab-item tab-world" to="/world">
          <i class="icon-airplane-around-earth"></i>
          <span>World</span>
        </router-link>
        <router-link tag="li" class="tab-item tab-blog" to="/blog">
          <i class="icon-blogger-botton"></i>
          <span>Blog</span>
        </router-link>
        <router-link tag="li" class="tab-item tab-blog" to="/blog">
          <i class="icon-blogger-botton"></i>
          <span>Github</span>
        </router-link>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import Bus from 'base/event-bus/event-bus.js'

export default {
  data () {
    return {
      open: false,
      flag: true,
      hide: false
    }
  },
  created () {
    Bus.$on('scrolling', (e) => {
      let firstVal = 0;
      if (this.flag) {
        firstVal = e.y
        this.flag = false
      }

      let diff = Math.abs(e.y - firstVal)
      if (diff > 50) {
        this.hide = true
        this.flag = true
      }
      console.log('------')
      console.log(firstVal)
      console.log(e.y)
      console.log(diff)
      console.log('------')
    })
  },
  methods: {
    toggleOpen () {
      this.open = !this.open
    }
  },
  watch: {
    $route() {
      this.open = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu-wrapper
  position fixed
  width 100%
  z-index 10
  bottom 0
  &.open
    height 100%
    overflow hidden
    .menu
      .line2
        margin-top 5px
        margin-bottom 5px
        opacity 0
      .line1
        // width  40px
        transform-origin 0 0 0
        transform translate3d(6px, -4px, 0) rotate(45deg) //scale(1.3)
      .line3
        // width  40px
        transform-origin 0 0 0
        transform translate3d(4px, 3px, 0) rotate(-45deg) //scale(1.3) 
    .expand-pannel
      transform scale(90)
      transition all .7s cubic-bezier(.25,.8,.25,1) 0s!important
    .text-list
      display block
      list-style none
      li:nth-child(1)
        animation nav-slide 1.07s cubic-bezier(.25,.8,.25,1) forwards
      li:nth-child(2)
        animation nav-slide 1.15s cubic-bezier(.25,.8,.25,1) forwards
      li:nth-child(3)
        animation nav-slide 1.24s cubic-bezier(.25,.8,.25,1) forwards  
      li:nth-child(4)
        animation nav-slide 1.33s cubic-bezier(.25,.8,.25,1) forwards
  .menu
    display flex
    flex-direction column
    justify-content center
    align-items center
    position absolute
    bottom  30px
    right 30px
    z-index 9
    width 40px
    height 40px
    line-height 40px
    text-align center
    color #ccc
    background #fff
    border-radius 50%
    box-shadow 0 8px 18px rgba(0,0,0,.3)
    .line
      display block
      width 20px
      height 2px
      background-color #999
      transition all .225s cubic-bezier(.25,.8,.25,1) 0s
    .line2
      margin-top 5px
      margin-bottom 5px
  .expand-pannel
    position absolute
    bottom  30px
    right 30px
    z-index -1
    width 40px
    height 40px
    border-radius 50%
    background-color rgba(31, 31, 31, .99)
    transform scale(0)
    transition all .375s cubic-bezier(.25,.8,.25,1) 0s
  .text-list
    display none
    padding 150px 0 0 0 
    background-color transparent
    font-size 30px
    text-align right
    color #fff
    li
      span 
        display inline-block
        width 100px

@keyframes nav-slide {
  from {
    transform translate3d(300px, 0, 0)
  }
  to {
    transform translate3d(-20px, 0, 0)
  }
}     
</style>
