import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from './logo.svg';
import './Header.css';

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
