<template>
  <div ref="scroll">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    props: {
      click: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default: null
      },
      probeType: {
        type: Number,
        default: 1
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll () {
        if (!this.$refs.scroll) {
          return
        }

        this.scroll = new BScroll(this.$refs.scroll, {
          probeType: this.probeType,
          click: this.click,
          pullUpLoad: this.pullUpLoad
        })

        let me = this

        if (this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos)
          })
        }

        if (this.pullUpLoad) {
          this.scroll.on('pullingUp', () => {
            me.$emit('pullingUp')
          })
        }
      },
      refresh () {
        this.scroll && this.scroll.refresh()
      },
      scrollTo () {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement () {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      },
      finishPullUp () {
        this.scroll && this.scroll.finishPullUp()
      }
    },
    watch: {
      data () {
        setTimeout(() => {
          this.refresh()
        }, 25)
      }
    }
  }
</script>

<style>

</style>
