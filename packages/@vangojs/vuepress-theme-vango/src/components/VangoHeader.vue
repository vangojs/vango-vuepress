<template>
  <header class="header">
    Header
  </header>
</template>

<script>
export default {
  name: 'VangoHeader',
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.header
  background-color $headerColor
  transition all 0.5s ease-in-out
</style>
