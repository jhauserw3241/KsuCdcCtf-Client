import React, { Component } from 'react';
import './cards.css';

class ScoreElement extends Component {
	render() {
		return (
			<div className="card-right">
				{this.props.score}
			</div>
		);
	}
}

export default ScoreElement;