const memArr = [];

export const getPostsRequesting = state => state.posts ? state.posts.data : memArr;
