import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom';
import './../../CSS/Login.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			redirect: false,
			allowEnterClick: false
		};
	}
	
	componentDidMount() {
		this.setState({allowEnterClick: true});
	}

	login(username, password) {
		this.props.login(username, password);
		this.setState({ redirect: true });
	}
	
	handleKeyPress = (event) => {
		if((this.state.allowEnterClick === true) && (event.key === 'Enter')){
			this.login(this.state.username, this.state.password);
		}
	}
	
	render() {
		const { redirect } = this.state;

		if (redirect) {
			return (
				<Redirect to={'/challenges'}/>
			);
		}
		
		return (
			<div className="Login form-container">
				<form method='POST' className="login-form" onSubmit={()=>this.login(this.state.username, this.state.password)}>
					<fieldset>
						<label className="login-label" htmlFor="username">Username:</label>
						<input
							type="text"
							name="username"
							value={this.state.username} onChange={(event) => {this.setState({username: event.target.value})}} />
					</fieldset>
					<fieldset>
						<label className="login-label" htmlFor="password">Password:</label>
						<input
							type="password"
							name="password"
							value={this.state.password} onChange={(event) => {this.setState({password: event.target.value})}}
							onKeyPress={this.handleKeyPress} />
					</fieldset>
					<input className="login-submit" type="submit" value="Submit" />
				</form>
				<main>
					{this.props.children}
				</main>
			</div>
		);
	}
}

export default Login;
