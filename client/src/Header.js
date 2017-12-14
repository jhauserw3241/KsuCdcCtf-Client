import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-header">
			<img src={logo} className="Header-logo" alt="logo" />
			<nav>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/home'>Home</Link></li>
					<li><Link to='/about'>About</Link></li>
				</ul>
			</nav>
        </header>
		<main>
			{this.props.children}
		</main>
      </div>
    );
  }
}

export default Header;
