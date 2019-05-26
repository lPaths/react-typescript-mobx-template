const path = require('path')
const {
  override,
  addDecoratorsLegacy,
  addBabelPlugins,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra')

module.exports = override(
  addDecoratorsLegacy(),
  ...addBabelPlugins(
    '@babel/plugin-transform-spread',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#85A5FF' },
  }),
  addWebpackAlias({
    '@components': path.resolve(__dirname, './src/components'),
    '@pages/*': path.resolve(__dirname, 'src/pages/*')
  })
)