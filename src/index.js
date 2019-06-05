import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/App.js';
import Auth from '../client/auth/auth.js';
import history from '../client/auth/history';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';


import {member,members,isLoading} from 'reducers';
const reducers = combineReducers({
	member, members, isLoading
});
const store = createStore(
	reducers, applyMiddleware(thunk)
);
const auth = new Auth();
ReactDOM.render(
	<App auth={auth} history={history} store={store}/>,
	document.getElementById('root')
);
