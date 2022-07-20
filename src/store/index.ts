import {configureStore, getDefaultMiddleware, ThunkAction, Action} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { createWrapper } from 'next-redux-wrapper';
import {useDispatch} from 'react-redux';
import rootReducer from './reducer';

const isDev = process.env.NODE_ENV === 'development';
const makeStore = () => {
  const middleware = getDefaultMiddleware();
  if(isDev) {
    middleware.push(logger);
  }
  const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: isDev,
  })
  return store;  
}

const wrapper = createWrapper(makeStore, {debug: isDev});

export type AppStore = ReturnType<typeof makeStore>;
type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

export default wrapper;

