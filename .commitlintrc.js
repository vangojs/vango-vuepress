const fs = require('fs')
const path = require('path')

const VangoPackages = fs.readdirSync(path.resolve(__dirname, 'packages/@vangojs'))

module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'docs',
        ...VangoPackages
      ].map(name => `$${name}`).concat('release')
    ]
  }
}
