import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as sematable } from 'sematable';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
} from '../actions';

const posts = handleActions({
  [FETCH_POSTS_REQUEST]: state => ({
    ...state,
    requesting: true,
  }),
  [FETCH_POSTS_SUCCESS]: (state, { payload }) => ({
    serverError: null,
    requesting: false,
    data: payload,
  }),
  [FETCH_POSTS_FAILED]: (state, { payload }) => ({
    ...state,
    serverError: payload,
    requesting: false,
  }),
}, {
  data: [],
  requesting: false,
  serverError: null,

});

const rootReducer = combineReducers({
  posts,
  sematable,
})

export default rootReducer;
