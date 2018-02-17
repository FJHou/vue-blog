<template>
  <div class="menu-wrapper" :class="open ? 'open' : ''">
    <div class="menu" @click="toggleOpen">
      <i class="line line1"></i>
      <i class="line line2"></i>
      <i class="line line3"></i>
    </div>
    <!-- 背景 -->
    <div class="expand-pannel"></div>
    <!-- <div class="nav-wrapper" v-show="open"> -->
      <ul class="text-list">
        <li>呵呵</li>
        <li>哈哈</li>
        <li>啊啊</li>
      </ul>
    <!-- </div> -->
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggleOpen () {
      this.open = !this.open
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu-wrapper
  position fixed
  width 100%
  // height 100%
  z-index 10
  // overflow hidden
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
      li:nth-child(1)
        animation nav-slide 1.07s cubic-bezier(.25,.8,.25,1) forwards
      li:nth-child(2)
        animation nav-slide 1.15s cubic-bezier(.25,.8,.25,1) forwards
      li:nth-child(3)
        animation nav-slide 1.24s cubic-bezier(.25,.8,.25,1) forwards  
  .menu
    display flex
    flex-direction column
    justify-content center
    align-items center
    position absolute
    top 60px
    right 60px
    z-index 9
    width 60px
    height 60px
    line-height 60px
    text-align center
    color #fff
    background pink
    border-radius 50%
    .line
      display block
      width 30px
      height 2px
      background-color #fff
      transition all .225s cubic-bezier(.25,.8,.25,1) 0s
    .line2
      margin-top 5px
      margin-bottom 5px
  .expand-pannel
    position absolute
    top 60px
    right 60px
    z-index -1
    width 60px
    height 60px
    border-radius 50%
    background-color rgba(31, 31, 31, .99)
    transform scale(0)
    transition all .375s cubic-bezier(.25,.8,.25,1) 0s
  .text-list
    display none
    padding 150px 50px 0 0
    background-color transparent
    font-size 30px
    text-align right
    color #fff

@keyframes nav-slide {
  from {
    transform translate3d(300px, 0, 0)
  }
  to {
    transform translate3d(-10px, 0, 0)
  }
}     
</style>
