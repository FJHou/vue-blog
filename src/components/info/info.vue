.<!--  -->
<template>
  <div class="section-one">
    <div class="overlay">
      <p class="title">
        <i>H</i>ou's <i>W</i>orld
      </p>
    </div>

     <video src="../../assets/video/bridge_video.mp4" loop autoplay class="video-bg"></video>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  methods: {}
}
</script>

<style lang='stylus' scoped>
  .section-one
    position relative
    height 400px
    overflow hidden
    // background url('../../assets/img/bridge.webp') no-repeat center/cover
    font-size 0
    .overlay 
      position absolute
      background transparent
      .title
        z-index 1
        position absolute
        left 0
        top 0
        margin 0
        font-size 18px
        i
          font-style normal
          font-size 20px
    .video-bg
      height 100%
</style>