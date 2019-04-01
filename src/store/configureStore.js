import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(browserHistory, initialState) {
  const { devToolsExtension } = window;

  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(browserHistory),
        thunkMiddleware,
      ),
      devToolsExtension ? devToolsExtension() : f => f,
    ),
  );
}
