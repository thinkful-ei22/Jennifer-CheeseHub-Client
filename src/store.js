import './index.css';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import cheeseReducer from './reducers/cheeseReducer';


const store= createStore(cheeseReducer, applyMiddleware(thunk));

export default store;
