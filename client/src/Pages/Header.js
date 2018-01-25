import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './../CSS/Header.css';

class Header extends Component {
	render() {
		if(this.props.isAuthenticated) {
			return (
				<div className="Header">
					<div className="Navbar">
						<div className="Header-text">
							KSU CDC CTF
						</div>
						<div className="nav-body">
							<NavLink to="/scoreboard" className="nav-link">Scoreboard</NavLink>
							<NavLink to="/challenges" className="nav-link">Challenges</NavLink>
							<NavLink to="/signout" className="nav-link">Signout</NavLink>
						</div>
					</div>

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
							<NavLink to="/scoreboard" className="nav-link">Scoreboard</NavLink>
							<NavLink to="/login" className="nav-link">Login</NavLink>
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
