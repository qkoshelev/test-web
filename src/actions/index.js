import { createAction } from 'redux-actions';
import api from '../middleware';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILURE'

export const fetchPostsRequest = createAction(FETCH_POSTS_REQUEST);
export const fetchPostsSuccess = createAction(FETCH_POSTS_SUCCESS);
export const fetchPostsFailed = createAction(FETCH_POSTS_FAILED);

export const fetchPosts = query => (dispatch) => {
  dispatch(fetchPostsRequest());
  return api.getPosts(query).send().then((data) => {
    dispatch(fetchPostsSuccess(data));
  }).catch((err) => {
    dispatch(fetchPostsFailed(err));
    alert('Unable to fetch posts from server'); //TODO notifyError action with popup
  });
};
