<template>
  <footer class="footer">
    Footer
  </footer>
</template>

<script>
export default {
  name: 'VangoFooter',
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.footer
  color $grayTextColor
  padding-bottom 1.5rem
  text-align center
  border-top 1px solid $borderColor
</style>
