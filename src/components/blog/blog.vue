<template>
  <div class="blog" v-show="showFlag">
    <back></back>
  </div>
</template>

<script type="text/ecmascript-6">
import back from '@/components/back/back'

export default {
  data () {
    return {
      showFlag: true
    }
  },
  methods: {
    back () {
      window.history.back()
      this.showFlag = !this.showFlag
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
    position absolute
    width 100%
    height 100%
    background-color $color-background60
</style>
