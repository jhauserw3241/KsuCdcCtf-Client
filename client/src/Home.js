import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
		<main>
			{this.props.children}
		</main>
        <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.TEst
        </p>
      </div>
    );
  }
}

export default Home;
