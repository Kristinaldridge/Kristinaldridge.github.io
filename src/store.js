import { createStore } from 'redux';
import rootReducer from './reducer'; 

const initialState = {
  count: 0 
};

const store = createStore(rootReducer, initialState);

export default store;



