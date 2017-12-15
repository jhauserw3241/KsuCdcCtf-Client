import React, { Component } from 'react';
import logo from './logo.svg';

class About extends Component {
  render() {
    return (
      <div className="About">
		<main>
			{this.props.children}
		</main>
        <p className="About-intro">
          About
        </p>
      </div>
    );
  }
}

export default About;
