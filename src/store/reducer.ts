import {combineReducers} from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import countSlice from '../slices/count';

const combinedReducer = combineReducers({
  count: countSlice,
});

const rootReducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    }
    return nextState;
  } else {
    return combinedReducer(state, action)
  }
}
export default rootReducer;