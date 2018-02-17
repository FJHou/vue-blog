<template>
  <div class="blog" v-show="showFlag">
    <back></back>
    <div class="list-wrapper" ref="listWrapper">
      <ul>
        <li class="blog-item" 
            v-for="(item, index) in blogList" 
            :key="index"
            @click="readArticle(item.id)">
          <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <v-card>
                <v-card-media :src="item.img" height="250px">
                </v-card-media>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{item.title}}</h3>
                    <div>{{item.content}}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <!-- <v-btn flat color="orange">Share</v-btn> -->
                  <!-- <v-btn flat color="orange">Explore</v-btn> -->
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <div class="blog-loading" v-show="!blogList">
      <Loading></Loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import back from '@/components/back/back'
import Loading from '@/components/loading/loading'
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
  },
  methods: {
    readArticle (id) {
      this.$router.push({
        path: `/blog/article?id=${id}`
      })
    },
    back () {
      window.history.back()
      this.showFlag = !this.showFlag
    },
    initBscroll () {
      this.scroll = new BScroll(this.$refs.listWrapper, {
        click: true
      })
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
    back,
    Loading
  }
}
</script>

<style lang="stylus">
  @import "../../common/stylus/variable"
  .blog
    position: absolute
    top 0
    left 0
    right 0
    bottom 0
    background-color $color-background0
    .list-wrapper
      position absolute
      bottom 0
      top 0
      left 0
      padding: 0 20px
      overflow hidden
      .blog-item
        // padding 10px
        margin-bottom 30px
        // background-color #fff
        // border-radius 2px
        // box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)
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
        // .loading-wrapper
        //   display inline-block
        //   margin auto
        // svg
        //   path
        //     fill: #fff;
        //   rect
        //     fill: #fff;
</style>
