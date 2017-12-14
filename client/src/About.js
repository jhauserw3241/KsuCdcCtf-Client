import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class About extends Component {
  render() {
    return (
      <div className="About">
		<main>
			{this.props.children}
		</main>
        <p className="About-intro">
          To get started, edit <code>src/About.js</code> and save to reload.about
        </p>
      </div>
    );
  }
}

export default About;
