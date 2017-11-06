const isDev = process.env.NODE_ENV !== 'production';

const config = {
  apiUrl: isDev ? 'http://localhost:3000' : 'https://yetanotherburgertested.herokuapp.com',
};

export default config.apiUrl;
