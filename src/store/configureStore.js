import { createStore, combineReducers } from 'redux';

import missionReducer from '../reducers/missions';
import filterReducer from '../reducers/filters';

// Store creation

const configureStore = () => {
  const store = createStore(
    combineReducers({
      missions: missionReducer,
      filters: filterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default configureStore;