const WorkboxPlugin = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      return config
    }

    config.plugins.push(new WorkboxPlugin({
      globDirectory: path.resolve('./.next/dist/'),
      globPatterns: ['**/*.{html,js,css}'],
      swDest: path.resolve('./static/sw/service-worker.js'),
      clientsClaim: true,
      skipWaiting: true,
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
