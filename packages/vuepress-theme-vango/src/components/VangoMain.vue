<template>
  <div class="container clearfix">
    <main class="main">
      main
    </main>

    <aside class="aside">
      Aside
    </aside>
  </div>
</template>

<script>
export default {
  name: 'VangoMain',
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.container
  position relative
  margin 1rem auto
  .aside
    position relative
  @media (max-width $MQMobile - 1px)
    margin 0.5rem auto
  &:not(.show-aside)
    .main
      width 100%
    .aside
      display none
  &.show-aside
    @media (min-width $MQWide)
      .main
        width 75%
      .aside
        width 25%
    @media (max-width $MQWide - 1px) and (min-width $MQMobile)
      .main
        width 70%
      .aside
        width 30%
    @media (min-width $MQMobile)
      .main
        float left
      .aside
        float left
        padding-left 1rem
    @media (max-width $MQMobile - 1px)
      .main
        width 100%
      .aside
        display none
</style>
