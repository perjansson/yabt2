const isDev = process.env.NODE_ENV !== 'production';

export default {
  apiUrl: isDev ? 'http://localhost:3000' : 'https://yetanotherburgertested.herokuapp.com',
};
