<template>
  <div class="blog" v-show="showFlag">
    <back></back>
    <div class="list-wrapper" ref="listWrapper">
      <ul>
        <li v-for="item in blogList" class="blog-item">
          <div class="item">
            <div class="img-wrapper">
              <img :src="item.img">
            </div>
            <p class="title">{{item.title}}</p>
            <p class="introduction">{{item.content}}</p>
            <p class="date">{{item.date}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="blog-loading" v-show="!blogList">
      <div class="loading-wrapper">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
          <rect x="0" y="0" width="4" height="10" fill="#fff">
            <animateTransform attributeType="xml"
              attributeName="transform" type="translate"
              values="0 0; 0 20; 0 0"
              begin="0" dur="0.7" repeatCount="indefinite" />
          </rect>
          <rect x="10" y="0" width="4" height="10" fill="#fff">
            <animateTransform attributeType="xml"
              attributeName="transform" type="translate"
              values="0 0; 0 20; 0 0"
              begin="0.2s" dur="0.7" repeatCount="indefinite" />
          </rect>
          <rect x="20" y="0" width="4" height="10" fill="#fff">
            <animateTransform attributeType="xml"
              attributeName="transform" type="translate"
              values="0 0; 0 20; 0 0"
              begin="0.4s" dur="0.7" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import back from '@/components/back/back'
import {getBlogList} from '@/api/getBlogList'
import {mockGetBlogList} from 'mock/getBlogList'
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      showFlag: true,
      blogList: 0,
      scroll: null
    }
  },
  created () {
    mockGetBlogList()
  },
  mounted () {
    this._getBlogList()
    // axios.get('localhost:8180/a')
    //     .then((res) => {
    //       this.blogList = res.data.list
    //       this.$nextTick(() => {
    //         this.initBscroll()
    //       })
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
  },
  methods: {
    back () {
      window.history.back()
      this.showFlag = !this.showFlag
    },
    initBscroll () {
      this.scroll = new BScroll(this.$refs.listWrapper, {})
    },
    _getBlogList () {
      getBlogList().then((res) => {
        this.blogList = res.list
        console.log(this.blogList)
        this.$nextTick(() => {
          this.initBscroll()
        })
      })
    }
  },
  components: {
    back
  }
}
</script>

<style lang="stylus">
  @import "../../common/stylus/variable"
  .blog
    position: relative
    height 100%
    background-color $color-background0
    .list-wrapper
      position absolute
      bottom 40px
      top 60px
      left 0
      padding: 0 20px
      overflow hidden
      .blog-item
        padding 10px
        margin-bottom 10px
        background-color #fff
        border-radius 2px
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)
        .item
          .img-wrapper
            padding-top 80%
            position relative
            overflow hidden
          img
            position absolute
            top 0
            left 0
            width 100%
    .blog-loading
      position: absolute
      bottom 40px
      top 60px
      left 0
      width 100%
      display flex
      .loading-wrapper
        display inline-block
        margin auto
        // svg
        //   path
        //     fill: #fff;
        //   rect
        //     fill: #fff;
</style>
