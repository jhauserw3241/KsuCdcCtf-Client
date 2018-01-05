import React, { Component } from 'react';
import ScoreElement from './ScoreElement';
import NameElement from './NameElement';
import './cards.css';

class ScoreboardElement extends Component {
	render() {
		return (
			<div className="card-score">
				<NameElement name={this.props.name} />
				<ScoreElement score={this.props.score} />
			</div>
		);
	}
}

export default ScoreboardElement;