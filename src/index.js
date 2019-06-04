import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/components/app/App.js';
import Auth from '../client/auth/auth.js';
import history from '../client/auth/history';


import { createStore, combineReducers } from 'redux';


import {member,members,isLoading} from '../client/reducers';
const reducers = combineReducers({
	member, members, isLoading
});
const store = createStore(
	reducers
);
const auth = new Auth();
ReactDOM.render(
	<App auth={auth} history={history} store={store}/>,
	document.getElementById('root')
);
