/* config-overrides.js */
const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const path = require('path')
const rewireTypescript = require('react-app-rewire-typescript')

module.exports = function override(config, env) {
  config = injectBabelPlugin(['@babel/plugin-proposal-decorators', { legacy: true }], config)

  config = rewireTypescript(config, env)

  config = rewireLess.withLoaderOptions({
    modifyVars: {},
    javascriptEnabled: true
  })(config, env)

  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto'
  })

  config.resolve = {
    alias: {
      '@components': path.resolve(__dirname, './src/components')
    },
    extensions: ['.js', 'jsx', '.json', 'mjs', '.ts', '.tsx']
  }

  return config
}