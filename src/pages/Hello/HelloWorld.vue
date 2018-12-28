<template>
  <div class="hello-world">
    <home-header></home-header>
    <home-guide></home-guide>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './component/header'
import HomeGuide from './component/guide'
import HomeFooter from './component/footer'

export default {
  name: 'HelloWorld',
  components : {
      HomeHeader, HomeGuide, HomeFooter
  },
    methods: {
      begin (step) {
        this.gogo = step
      }
    },
}
</script>

<style lang="stylus" scoped>
    .hello-world
        min-width 430px
</style>
