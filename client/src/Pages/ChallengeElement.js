import React, { Component } from 'react';
import FlagElement from './FlagElement';
import ClueElement from './ClueElement';

class ChallengeElement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false
		};
		this.toggleDetails = this.toggleDetails.bind(this);
	}

	toggleDetails() {
		const { expanded } = this.state;
		this.setState({
			expanded: !expanded,
		});
	}

	render() {
		const { expanded } = this.state;

		return (
			<div className="card">
				<div className="card-header" onClick={this.toggleDetails}>
					<div className="card-left">
						{this.props.name}
					</div>
				</div>
				{expanded && (
					<div className="card-details">
						<FlagElement flag={this.props.flag} />
						<br/>
						<ClueElement clue={this.props.clue} />
					</div>
				)}
			</div>
		);
	}
}

export default ChallengeElement;