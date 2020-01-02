const path = require('path')
const { logger } = require('@vuepress/shared-utils')
const markdownItCenterText = require('markdown-it-center-text')

module.exports = (opts, ctx) => {
  Object.assign(
    opts,
    Object.assign(
      {
        lang: 'en-US',
        personalInfo: {},
        defaultPages: {},
        header: {},
        footer: {},
        infoCard: {},
        plugins: {},
        pagination: {
          perPage: 5,
        },
        comments: {},
      },
      opts,
    ),
  )

  const { comments, lang, defaultPages, header, infoCard } = opts

  const noopGeo =
    header.background &&
    (header.background.url || header.background.useGeo === false) &&
    infoCard.headerBackground &&
    (infoCard.headerBackground.url || infoCard.headerBackground.useGeo === false)

  const options = {
    name: 'vuepress-theme-vango',

    enhanceAppFiles: [path.resolve(__dirname, 'enhanceApp.js')],

    extendMarkdown: md => md.use(markdownItCenterText),

    chainWebpack(config, isServer) {
      if (noopGeo) {
        // point geopattern to noopModule
        config.resolve.alias.set('geopattern', path.resolve(__dirname, 'utils/noopModule'))
      } else {
        // to make geopattern work
        if (isServer === false) {
          config.node.set('Buffer', false)
        }
      }

      // to use jsx syntax with evergreen config
      if (ctx.siteConfig.evergreen) {
        config.module
          .rule('js')
          .test(/\.js$/)
          .exclude.add(filePath => {
            if (filePath.startsWith(path.resolve(__dirname))) {
              return false
            }
            return true
          })
          .end()
          .use('cache-loader')
          .loader('cache-loader')
          .options({
            cacheDirectory: ctx.cacheDirectory,
            cacheIdentifier: ctx.cacheIdentifier,
          })
          .end()
          .use('babel-loader')
          .loader('babel-loader')
          .options({
            babelrc: false,
            configFile: false,
            presets: [require.resolve('@vue/babel-preset-jsx')],
          })
      }
    },

    ready() {
      if (defaultPages.home !== false) {
        ctx.addPage({
          permalink: '/',
          frontmatter: {
            title: lang.home,
            layout: 'Home',
          },
        })
      }

      if (defaultPages.posts !== false) {
        ctx.addPage({
          permalink: '/posts/',
          frontmatter: {
            title: lang.posts,
            layout: 'Posts',
          },
        })
      }
    },
  }

  return options
}
