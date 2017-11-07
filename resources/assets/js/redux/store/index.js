"use strict";

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import history from '../history';
import reducers from '../reducers';

import promisesMiddleware from '../middlewares/promises';

import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const middlewareHistory = routerMiddleware(history);
const middleware = [middlewareHistory, thunk, logger, promisesMiddleware];
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
