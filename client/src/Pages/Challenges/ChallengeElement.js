import React, { Component } from 'react';
import NameElement from './../Shared/NameElement';
import StatusElement from './StatusElement';
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
		
		if(this.props.cstatus === "Done") {
			return (
				<div className="card">
					<div className="card-main challenge-card" onClick={this.toggleDetails}>
						<NameElement name={this.props.name} />
						<StatusElement cstatus={this.props.cstatus} />
					</div>
					{expanded && (
						<div className="card-details">
							<ClueElement clue={this.props.clue} />
						</div>
					)}
				</div>
			);
		}
		else if (this.props.cstatus === "In Progress") {
			return (
				<div className="card">
					<div className="card-main challenge-card" onClick={this.toggleDetails}>
						<NameElement name={this.props.name} />
						<StatusElement cstatus={this.props.cstatus} />
					</div>
					{expanded && (
						<div className="card-details">
							<ClueElement clue={this.props.clue} />
							<FlagElement id={this.props.id} flag={this.props.flag} flagHandler={this.props.flagHandler} />
						</div>
					)}
				</div>
			);
		}
		else {
			return (
				<div className="card">
					<div className="card-main challenge-card" onClick={this.toggleDetails}>
						Something went wrong
					</div>
					{expanded && (
						<div className="card-details">
							Invalid challenge status was received
						</div>
					)}
				</div>
			);
		}
	}
}

export default ChallengeElement;
