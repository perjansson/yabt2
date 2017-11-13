const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

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
