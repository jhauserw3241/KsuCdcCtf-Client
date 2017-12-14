import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class About extends Component {
  render() {
    return (
      <div className="About">
        <header className="About-header">
          <img src={logo} className="About-logo" alt="logo" />
          <h1 className="About-title">About</h1>
        </header>
		<main>
			{this.props.children}
		</main>
        <p className="About-intro">
          To get started, edit <code>src/About.js</code> and save to reload.TEst
        </p>
      </div>
    );
  }
}

export default About;
