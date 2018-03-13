<template>
  <div class="article">
    <div class="article-bg">
      <img src="" alt="">
    </div>
    <h1 class="article-title">{{title}}</h1>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      title: '原生js的发展与未来'
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
  .article
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background #fff
    z-index 2
    .article-bg
      height 220px
      background-color #666
    .article-title
      padding: 10px 15px
      color: #333
</style>
