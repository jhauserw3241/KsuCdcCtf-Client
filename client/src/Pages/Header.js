import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './../CSS/Header.css';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		};
	}
	
	/*getLoggedIn() {
		fetch('/isloggedin', {
			credentials: 'include'})
		.then(res => res.json())
		.then(isLoggedIn => this.setState({ isLoggedIn }));
	}
	
	componentDidMount() {
		getLoggedIn();
	}*/
	
	render() {
		const { isLoggedIn } = this.state;
		
		if(isLoggedIn) {
			return (
				<div className="Header">
					<header className="Header-header">
						<Navbar>
							<Navbar.Header>
								KSU CDC CTF
							</Navbar.Header>
							<div className="nav-body">
							<Nav bsStyle="pills">
								<NavItem href="/scoreboard" onClick={this.getLoggedIn}>Scoreboard</NavItem>
								<NavItem href="/challenges" onClick={this.getLoggedIn}>Challenges</NavItem>
								<NavItem href="/signout" onClick={this.getLoggedIn}>Signout</NavItem>
							</Nav>
							</div>
						</Navbar>
					</header>
					<main>
						{this.props.children}
					</main>
				</div>
			);
		} else {
			return (
				<div className="Header">
					<header className="Header-header">
						<Navbar>
							<Navbar.Header>
								KSU CDC CTF
							</Navbar.Header>
							<div className="nav-body">
							<Nav bsStyle="pills">
								<NavItem href="/scoreboard" onClick={this.getLoggedIn}>Scoreboard</NavItem>
								<NavItem href="/login" onClick={this.getLoggedIn}>Login</NavItem>
							</Nav>
							</div>
						</Navbar>
					</header>
					<main>
						{this.props.children}
					</main>
				</div>
			);
		}
	}
}

export default Header;
