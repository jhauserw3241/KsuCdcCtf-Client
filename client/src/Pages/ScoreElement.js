import React, { Component } from 'react';

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