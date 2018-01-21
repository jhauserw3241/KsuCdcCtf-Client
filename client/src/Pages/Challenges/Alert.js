import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class ChallengeAlert extends Component {
	render() {
		if()
		return (
			<div className="card">
				<div className="card-main challenge-card" onClick={this.toggleDetails} style={doneStyle} >
					<NameElement name={this.props.name} />
					<PointsElement name={this.props.name} points={this.props.points} />
				</div>
				{expanded && (
					<div className="card-details">
						<ClueElement clue={this.props.clue} />
					</div>
				)}
			</div>
		);
	}
}

export default ChallengeAlert;
