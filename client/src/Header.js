import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
					<NavItem href="/home">Home</NavItem>
					<NavItem href="/about">About</NavItem>
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
