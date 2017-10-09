<template>
  <div class="back">
    <i class="icon-arrow-left2" @click="back"></i>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>

<style lang="stylus">
  .back
    position absolute
    left 20px
    top 20px
    .icon-arrow-left2
      font-size 26px
</style>
