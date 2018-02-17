<template>
  <div class="loading-wrapper">
    <div>
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
</template>

<script type="text/ecmascript-6">
export default {
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
  .loading-wrapper
    display flex
    align-items center
    justify-content center
    // height 100%
    // text-align center
    // display inline-block
    // margin auto
</style>