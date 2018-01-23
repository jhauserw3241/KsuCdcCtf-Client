import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import Header from './Pages/Header';
import { Main } from './routes';

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

class AuthExample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAuthenticated: false
		};
		
		this.getAuthenticated = this.getAuthenticated.bind(this);
		this.authenticate = this.authenticate.bind(this);
		this.signout = this.signout.bind(this);
	}
	
	getAuthenticated() {
		return this.state.isAuthenticated;
	}
	
	authenticate(cb) {
		this.setState({isAuthenticated:true});
		setTimeout(cb, 100);
	}

	signout(cb) {
		this.setState({isAuthenticated: false});
		setTimeout(cb, 100);
	}

	render() {
		return (
			<Router>
				<div>
					<Header isAuthenticated={this.state.isAuthenticated} />
					<Main isAuthenticated={this.state.isAuthenticated} login={this.authenticate} signout={this.signout} />
				</div>
			</Router>
		);
	}
}

export default AuthExample

render((
	<AuthExample />),
	document.getElementById('root')
);

//registerServiceWorker();