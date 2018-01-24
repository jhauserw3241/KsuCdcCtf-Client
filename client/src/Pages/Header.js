import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './../CSS/Header.css';

class Header extends Component {
	render() {
		if(this.props.isAuthenticated) {
			return (
				<div className="Header">
					<header className="Header">
						<div className="Navbar">
							<div className="Header-header">
								KSU CDC CTF
							</div>
							<div className="nav-body">
								<NavLink to="/scoreboard">Scoreboard</NavLink>
								<NavLink to="/challenges">Challenges</NavLink>
								<NavLink to="/signout">Signout</NavLink>
							</div>
						</div>
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
					<div className="Navbar">
						<div className="Header-text">
							KSU CDC CTF
						</div>
						<div className="nav-body">
							<NavLink to="/scoreboard">Scoreboard</NavLink>
							<NavLink to="/login">Login</NavLink>
						</div>
					</div>

					<main>
						{this.props.children}
					</main>
				</div>
			);
		}
	}
}

export default Header;
