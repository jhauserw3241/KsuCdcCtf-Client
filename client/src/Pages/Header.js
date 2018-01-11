import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from './../logo.svg';
import './../CSS/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-header">
			<Navbar>
				<Navbar.Header>
					<img src={logo} className="Header-logo" alt="logo" />
				</Navbar.Header>
				<Nav bsStyle="pills">
					<NavItem href="/scoreboard">Scoreboard</NavItem>
					<NavItem href="/challenges">Challenges</NavItem>
					<NavItem href="/login">Login</NavItem>
				</Nav>
			</Navbar>
        </header>
		<main>
			{this.props.children}
		</main>
      </div>
    );
  }
}

export default Header;
