module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/b/lilys': { page: '/burger', query: { id: 'lilys' } },
      '/b/frickhagberg': { page: '/burger', query: { id: 'frickhagberg' } },
      '/b/barrels': { page: '/burger', query: { id: 'barrels' } },
    };
  },
};
