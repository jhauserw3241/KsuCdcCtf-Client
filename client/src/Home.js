import React, { Component } from 'react';
import logo from './logo.svg';

class Home extends Component {
  render() {
    return (
      <div className="Home">
		<main>
			{this.props.children}
		</main>
        <p className="Home-intro">
          Home
        </p>
      </div>
    );
  }
}

export default Home;
