import React, { Component } from 'react';
import Card from './Card';
import logo from './logo.svg';

class Home extends Component {
  render() {
    return (
      <div className="Home">
		<main>
			{this.props.children}
		</main>
        <p className="Home-intro">
          Logan was here
        </p>
		<ul>
			<Card />
			<Card />
		</ul>
      </div>
    );
  }
}

export default Home;
