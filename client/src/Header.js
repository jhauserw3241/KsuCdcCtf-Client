import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
}

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-header">
			<img src={logo} className="Header-logo" alt="logo" />
			<Nav bsStyle="pills" onSelect={handleSelect}>
				<NavItem eventKey={1} href="/home">Home</NavItem>
				<NavItem eventKey={2} href="/about">About</NavItem>
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
