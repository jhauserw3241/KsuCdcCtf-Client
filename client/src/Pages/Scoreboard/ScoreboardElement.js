import React, { Component } from 'react';
import ScoreElement from './ScoreElement';
import NameElement from './../Shared/NameElement';

class ScoreboardElement extends Component {
	render() {
		return (
			<div className="card-main scorecard">
				<NameElement name={this.props.eid} />
				<ScoreElement score={this.props.score} />
			</div>
		);
	}
}

export default ScoreboardElement;