import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/components/app/App.js';
import Auth from '../client/auth/auth.js';
import history from '../client/auth/history';


import { createStore, combineReducers, applyMiddleware } from 'redux';
import {
	routerReducer,
	routerMiddleware,
} from 'react-router-redux';

import {member,members,isLoading} from '../client/reducers';
const middleware = routerMiddleware(history);
const reducers = combineReducers({
	member, members, isLoading,
	router: routerReducer
});
const store = createStore(
	reducers,
	applyMiddleware(middleware)
);
const auth = new Auth();
ReactDOM.render(
	<App auth={auth} history={history} store={store}/>,
	document.getElementById('root')
);
