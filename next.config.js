const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { ANALYZE } = process.env

module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      return config
    }

    config.plugins.push(new SWPrecacheWebpackPlugin({
      minify: true,
      verbose: true,
      staticFileGlobsIgnorePatterns: [/\.next\//],
      runtimeCaching: [
        {
          handler: 'networkFirst',
          urlPattern: /^https?.*/,
        },
      ],
    }))

    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true,
      }))
    }

    return config
  },

  exportPathMap() {
    return {
      '/': { page: '/' },
      '/b/lilys': { page: '/burger', query: { id: 'lilys' } },
      '/b/frick_hagberg': { page: '/burger', query: { id: 'frick_hagberg' } },
      '/b/barrels': { page: '/burger', query: { id: 'barrels' } },
    }
  },
}
