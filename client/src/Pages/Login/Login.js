import React, { Component } from 'react';
import UsernameElement from './UsernameElement';
import PasswordElement from './PasswordElement';
import SubmitElement from './SubmitElement';

class Login extends Component {
	render() {
		return (
			<div className="Login">
				<main>
					{this.props.children}
				</main>
				
				<UsernameElement />
				<br/>
				<PasswordElement />
				<br/>
				<SubmitElement />
			</div>
		);
	}
}

export default Login;
