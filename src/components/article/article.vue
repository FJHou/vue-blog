<template>
  <div class="article">
    <Scroll ref="articleWrapper" :data="[]" class="article-wrapper">
      <div class="article-scroll">
        <div class="article-bg">
          <img src="" alt="">
        </div>
        <h1 class="article-title">{{title}}</h1>
        <article class="article-section">
          <section v-html="article"></section>
        </article>
        <div class="cut-off">
          <span class="comment">{{comment}}条评论</span>
          <span class="comment-line"></span>
        </div>
      </div>
    </Scroll> 
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
import articles from './article.js'

export default {
  data () {
    return {
      title: '原生js的发展与未来',
      article: '',
      datas: [],
      comment: '0'
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.article = articles
    })
    setTimeout(() => {
      this.$refs.articleWrapper.refresh()
    }, 2000)
  },
  methods: {

  },
  components: {
    Scroll
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
    .article-wrapper
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      .article-bg
        margin 0 -20px
        height 220px
        background-color #666
      .article-title
        padding: 10px 0
        color: #333
      .article-scroll
        padding-left 20px
        padding-right 20px
        .article-section
          margin-top 30px
          padding-bottom 30px
      .cut-off

        display flex
        align-items center
        font-weight 600
        .comment
          padding-right 10px
        .comment-line
          flex 1
          height 1px
          background #ccc
</style>
