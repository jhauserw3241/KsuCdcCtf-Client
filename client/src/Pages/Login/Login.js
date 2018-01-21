import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './../../CSS/Login.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}

	login(username, password) {
		console.log("Username: " + this.state.username);
		console.log("Password: " + this.state.password);
		
		fetch(`/login/${username}&${password}`, {
			method: 'POST',
			credentials: 'include'})
		.then((response) => response.json())
		.then((data) =>
		{
			console.log("Got response");
			console.log(data.success);
			<Redirect to={'/scoreboard'} />
		})
	}
	
	render() {
		return (
			<div className="Login form-container">
				<main>
					{this.props.children}
				</main>
				
				<div className="left form-row">
					Username: 
					<input type="text" value={this.state.username} onChange={(event) => {this.setState({username: event.target.value})}} />
				</div>
				<br/>
				<div className="left form-row">
					Password: 
					<input type="password" value={this.state.password} onChange={(event) => {this.setState({password: event.target.value})}} />
				</div>
				<br/>
				<Button className="left form-row submit-button" onClick={()=>this.login(this.state.username, this.state.password)}>
					Submit
				</Button>
			</div>
		);
	}
}

export default Login;
