export default {
  getPosts: {
    method: 'get',
    url: query => `/api/stackoverflow/search/${query}`,
    cacheTTL: 30000,
  },
};
