<template>
  <div class="tab">
    <router-link tag="div" class="tab-item tab-home" :to="{name: 'home', params: {id: 123, type: 'arr'}}">
      <i class="icon-home-icon-silhouette"></i>
      <span>HOME</span>
    </router-link>
    <router-link tag="div" class="tab-item tab-world" to="/world">
      <i class="icon-airplane-around-earth"></i>
      <span>WORLD</span>
    </router-link>
    <router-link tag="div" class="tab-item tab-blog" to="/blog">
      <i class="icon-blogger-botton"></i>
      <span>BLOG</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  created () {
  }
}
</script>

<style lang="stylus">
  @import "../../common/stylus/variable"

  .tab
    position absolute
    left 0px
    top 50%
    padding-left 50px;
    color: #fff
    .tab-item
      padding 10px
      i
        font-size 26px
      span
        padding-left 5px
        font-size 30px
        line-height 30px
        font-weight bold
    .tab-home-float
      animation: float 3s linear infinite alternate

  @keyframes float
    0%
      transform translate3d(-2px, -5px, 0)
    30%
      transform translate3d(-3px, -2px, 0)
      transform rotate(4deg)
    60%
      transform translate3d(0px, 2px, -10px)
      transform rotate(-3deg)
    100%
      transform translate3d(5px, 3px, 0)
</style>
