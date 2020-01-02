<template>
  <div id="vuepress-theme-vango">
    <vango-header />

    <vango-main />

    <vango-footer />
  </div>
</template>

<script>
import VangoHeader from '@theme/components/VangoHeader.vue'
import VangoMain from '@theme/components/VangoMain.vue'
import VangoFooter from '@theme/components/VangoFooter.vue'

export default {
  name: 'ThemeVango',

  components: {
    VangoHeader,
    VangoMain,
    VangoFooter,
  },
}
</script>

<style lang="stylus" src="@theme/styles/index.styl" />
