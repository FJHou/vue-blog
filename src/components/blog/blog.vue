<template>
  <div class="blog" v-show="showFlag">
    <back></back>

    <Scroll class="list-wrapper" ref="listWrapper" :listenScroll="true" @scroll="scrolling">
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
    </Scroll>
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
import Bus from 'base/event-bus/event-bus.js'
import Scroll from 'base/scroll/scroll'

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
    _getBlogList () {
      getBlogList().then((res) => {
        this.blogList = res.list
        this.$nextTick(() => {
          this.$refs.listWrapper.refresh()
        })
      })
    },
    scrolling (e) {
      // console.log(Bus)
      Bus.$emit('scrolling', e)
    }
  },
  components: {
    back,
    Loading,
    Scroll
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
    // background-color $color-background0
    z-index 9
    .list-wrapper
      position absolute
      bottom 0
      top 0
      left 0
      right 0
      margin-top 60px
      padding: 0px 10px
      overflow hidden
      .blog-item
        margin-bottom 30px
        list-style none
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
