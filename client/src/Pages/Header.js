import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './../CSS/Header.css';

class Header extends Component {
	render() {
		if(this.props.isAuthenticated) {
			return (
				<div className="Header">
					<header className="Header-header">
						<Navbar>
							<Navbar.Header>
								KSU CDC CTF
							</Navbar.Header>
							<div className="nav-body">
								<NavLink to="/scoreboard">Scoreboard</NavLink>
								<NavLink to="/challenges">Challenges</NavLink>
								<NavLink to="/signout">Signout</NavLink>
							</div>
						</Navbar>
					</header>
					<main>
						{this.props.children}
					</main>
				</div>
			);
		}
		else {
			return (
				<div className="Header">
					<header className="Header-header">
						<Navbar>
							<Navbar.Header>
								KSU CDC CTF
							</Navbar.Header>
							<div className="nav-body">
								<NavLink to="/scoreboard">Scoreboard</NavLink>
								<NavLink to="/login">Login</NavLink>
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
