import React, { Component } from 'react';
import './App.css';
import Menu from '../menu/menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MembersPanelUI from '../../containers/membersPanelUI';
import Callback from '../callback/callback';
import Home from '../home/home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt, faUser, faBars, faUsers, faBook, faFileDownload, faSearch, faPhone, faEnvelope,faMapMarkerAlt, faHome, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Provider } from 'react-redux';
import {listMembers, navigateToMember} from 'actions/members';
import MemberInfoUI from '../../containers/memberInfoUI';
import MemberFormUI from '../../containers/memberFormUI';
import LoadingUI from '../../containers/loadingUI';
import SearchMembersUI from '../../containers/searchMembersUI';
import PropTypes from 'prop-types';
import ReportsHOC from '../reports/container/ReportsHOC';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';



class App extends Component {

	constructor(props) {
		super(props);
		library.add(faUser);
		library.add(faBars);
		library.add(faUsers);
		library.add(faBook);
		library.add(faFileDownload);
		library.add(faSearch);
		library.add(faPhone);
		library.add(faEnvelope);
		library.add(faMapMarkerAlt);
		library.add(faCalendarAlt);
		library.add(faPlus);
		library.add(faHome);
		this.validateRoute = this.validateRoute.bind(this);
		this.handleAuthentication = this.handleAuthentication.bind(this);
	}

	validateRoute(history) {
		if (!this.props.auth.isAuthenticated()) {
			console.log('Usuario não autenticado');
			history.push('/');
		}
	}


	goTo(route) {
		this.props.history.push(`/${route}`);
	}

	logout() {
		this.props.auth.logout();
	}

	handleAuthentication(nextState, replace) {
		if (/access_token|id_token|error/.test(nextState.location.hash)) {
			this.props.auth.handleAuthentication();
		}
	}



	render() {
		return (
			<MuiPickersUtilsProvider utils={MomentUtils}>
				<div className="App">
					<Provider store={this.props.store}>

						<Router history={this.props.history}>
							<div>
								<Menu />
								<div className="container">
									<Route exact path="/" render={(props) => <Home auth={this.props.auth} />} />
									<Route exact path="/membros" render={(props) => {
										this.validateRoute(props.history);
										this.props.store.dispatch(listMembers());
										return <LoadingUI>
											<MembersPanelUI/>
										</LoadingUI>;

									}} />
									<Route exact path="/membros/:id" render={(props) => {
										this.validateRoute(props.history);
										this.props.store.dispatch(navigateToMember(props.match.params.id));
										return <LoadingUI>
											<MemberInfoUI/>
										</LoadingUI>;
									}} />
									<Route exact path="/members/new" render={(props) => {
										this.validateRoute(props.history);
										return <MemberFormUI/>;
									}}/>
									<Route exact path="/search" render={(props) => {
										this.validateRoute(props.history);
										return <SearchMembersUI/>;
									}} />
									<Route exact path="/reports" render={(props) => {
										this.validateRoute(props.history);
										return <ReportsHOC/>;
									}} />
									<Route exact path="/callback_auth" render={(props) => {

										this.handleAuthentication(props);
										return <Callback {...props} />;
									}} />
								</div>
							</div>
						</Router>
					</Provider>
				</div>
			</MuiPickersUtilsProvider>
		);
	}
}

App.propTypes = {
	auth: PropTypes.any.isRequired,
	history: PropTypes.any.isRequired,
	store: PropTypes.any.isRequired,
};

export default App;
