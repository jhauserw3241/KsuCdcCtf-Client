import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div class="Card">
		<main>
			{this.props.children}
		</main>
        <p className="Card-intro">
          Card A
        </p>
      </div>
    );
  }
}

export default Card;
