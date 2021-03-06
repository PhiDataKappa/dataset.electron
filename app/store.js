import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerMiddleware, routerReducer, routerActions as routing, push, routerActions } from 'react-router-redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import * as homeActions from './actions/homepage.js';
import rootReducer from './reducers';


export default function configureStore(initialState, routerHistory) {
  const router = routerMiddleware(routerHistory);

  const actionCreators = {
    ...routerActions,
    ...homeActions
  };

  const middlewares = [ thunk, router ];

  const composeEnhancers = (() => {
    const compose_ = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if(process.env.NODE_ENV === 'development' && compose_) {
      return compose_({ actionCreators });
    }
    return compose;
  })();

  const enhancer = composeEnhancers(applyMiddleware(...middlewares), persistState());

  return createStore(rootReducer, initialState, enhancer);
}
