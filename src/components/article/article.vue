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
          <span class="comment-count">{{comments.length}}条评论</span>
          <span class="comment-line"></span>
        </div>
        <ul class="comment-list">
          <p class="no-comment" v-if="comments.length === 0">快来做第一个评论的吧~</p>
          <li v-else v-for="(comment, index) in comments" :key="index" class="comment">
            {{comment.content}}
          </li>
        </ul>
        <v-layout row>
          <v-flex>
            <v-text-field
              label="评论"
              auto-grow
              rows="3"
              textarea
              v-model="comment"
            ></v-text-field>
            <v-text-field
              label="Name"
              :rows="3"
              required
              v-model="name"
            ></v-text-field>
            <v-text-field
              label="E-mail"
              required
              v-model="email"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <div class="submit">
          <span @click="submit">提交评论</span>
        </div>
      </div>
    </Scroll> 
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
import articles from './article.js'

const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
  data () {
    return {
      title: '原生js的发展与未来',
      article: articles,
      comments: [],
      comment: '',
      name: '',
      email: '',
      rules: {
        required: (value) => !!value || '必填.',
        email: (value) => {
          return pattern.test(value) || '邮箱格式错误.'
        }
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.$refs.articleWrapper.refresh()
    }, 20)
  },
  methods: {
    submit () {
      let comment = {}
      comment.name = this.name
      comment.email = this.email
      comment.content = this.commentContent
      this.comments.push(comment)
      this._resetForm()
    },
    _validate () {
      // if (this.commentContent === '') {
      //   this.commentError = true
      //   return false
      // }

      // if (this.name === '') {
      //   this.nameError = true
      //   return false
      // }

      // if (!pattern.test(this.email)) {
      //   this.emailError = true
      //   return false
      // }

      // return true
    },
    _resetForm () {
      this.name = this.email = this.commentContent = ''
    }
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
        padding 0 20px 50px
        .article-section
          margin-top 30px
          padding-bottom 30px
      .cut-off
        display flex
        align-items center
        font-weight 600
        .comment-count
          padding-right 10px
        .comment-line
          flex 1
          height 1px
          background #ccc
      .comment-list
        position relative
        padding 40px 0
        &:after
          content ''
          position absolute
          left 0
          bottom 0
          height 1px
          width 100%
          background #ccc
        .comment
          list-style none
        .no-comment
          margin-bottom 0
          text-align center
      .submit
        display flex
        justify-content center
        margin-top 30px
        span
          background #1976d2
          padding 5px 10px
          font-weight 600
          color #fff
</style>
