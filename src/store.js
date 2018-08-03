import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import cheeseReducer from './reducers/cheeseReducer';


export default createStore(cheeseReducer, applyMiddleware(thunk));

