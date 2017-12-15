import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-header">
			<img src={logo} className="Header-logo" alt="logo" />
			<Nav bsStyle="pills">
				<NavItem href="/home">Home</NavItem>
				<NavItem href="/about">About</NavItem>
			</Nav>
        </header>
		<main>
			{this.props.children}
		</main>
      </div>
    );
  }
}

export default Header;
