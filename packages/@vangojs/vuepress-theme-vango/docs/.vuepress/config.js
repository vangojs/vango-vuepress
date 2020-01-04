const path = require('path')

module.exports = {
  dest: '../../../vuepress',

  title: 'vuepress-theme-vango',

  description: 'vuepress-theme-vango',

  locales: {
    '/': {
      lang: 'en-US',
    },
  },

  evergreen: true,

  plugins: [
    ['@vuepress/google-analytics', {
      ga: '',
    }],
  ],

  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vssue)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all',
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all',
          },
        },
      })
    }
  },

  theme: path.resolve(__dirname, '../../src'),

  themeConfig: {
    lang: 'en-US',

    personalInfo: {
      nickname: 'vangojs',
      description: 'Happy Coding<br/>Happy Life',
      email: '',
      location: 'Qingdao, China',
      organization: 'vangojs',

      avatar: 'https://vangojs.com/assets/img/avatar.jpg',

      sns: {
        github: {
          account: 'vangojs',
          link: 'https://github.com/vangojs',
        },
        gitlab: {
          account: 'vangojs',
          link: 'https://gitlab.com/vangojs',
        },
        gitee: {
          account: 'vangojs',
          link: 'https://gitee.com/vangojs',
        },
      },
    },

    header: {
      background: {
        // url: '/assets/img/header-image-01.jpg',
        useGeo: true,
      },
      showTitle: true,
    },

    footer: {
      poweredBy: true,
      poweredByTheme: true,
      custom: 'Copyright 2019-present <a href="https://github.com/vangojs" target="_blank">vangojs</a> | MIT License',
    },

    lastUpdated: true,

    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'Custom Pages', link: '/custom-pages/', exact: false },
      { text: 'Changelog', link: 'https://github.com/vangojs/vango-vuepress/blob/master/packages/vuepress-theme-vango/CHANGELOG.md' },
      { text: 'Github', link: 'https://github.com/vangojs/vango-vuepress' },
    ],

    pagination: {
      perPage: 5,
    },
  },
}
