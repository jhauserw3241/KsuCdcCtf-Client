import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import Header from './Pages/Header';
import { Main } from './routes';
import './CSS/Card.css';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAuthenticated: false
		};

		this.authenticate = this.authenticate.bind(this);
		this.signout = this.signout.bind(this);
	}
	
	attemptLogin(self, username, password) {
		if((username !== "") && (password !== "")) {
			fetch(`/login/${username}&${password}`, {
				method: 'POST',
				credentials: 'include'})
			.then((response) => response.json())
			.then((data) =>
			{
				if(data.success === "true") {
					self.setState({isAuthenticated:true});
				}
			})
		}
	}
	
	authenticate(username, password) {
		setTimeout(
			this.attemptLogin(this, username, password),
			100);
	}
	
	attemptSignout(self) {
		fetch(`/signout`, {
			method: 'POST',
			credentials: 'include'})
		.then((response) => response.json())
		.then((data) =>
		{
			if(data.success === "true") {
				self.setState({isAuthenticated: false});
			}
		})
	}

	signout() {
		setTimeout(this.attemptSignout(this), 100);
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

export default Index

render((
	<Index />),
	document.getElementById('root')
);

//registerServiceWorker();