import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, RootReducerType } from '@src/store/indexReducer';

const enhancer = composeWithDevTools(applyMiddleware());

export const configureStore = (preloadState: RootReducerType) => {
  return createStore(rootReducer, preloadState, enhancer);
};

export const store = configureStore({});
