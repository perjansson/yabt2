module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/b/lilys': { page: '/burger', query: { id: 'lilys' } },
      '/b/frick_hagberg': { page: '/burger', query: { id: 'frick_hagberg' } },
      '/b/barrels': { page: '/burger', query: { id: 'barrels' } },
    }
  },
}
