import React, { Component } from 'react';
import NameElement from './../Shared/NameElement';
import PointsElement from './PointsElement';
import FlagElement from './FlagElement';
import ClueElement from './ClueElement';

class ChallengeElement extends Component {
	constructor(props) {
		super(props);
		if(this.props.cstatus === "In Progress") {
			this.state = {
				expanded: true
			};
		} else {
			this.state = {
				expanded: false
			};
		}
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
		
		var doneStyle = {
			backgroundColor: '#40A045'
		};

		var inProgressStyle = {
			backgroundColor: '#feb204',
			color: 'black'
		};
		
		if(this.props.cstatus === "Done") {
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
		else if (this.props.cstatus === "In Progress") {			
			return (
				<div className="card">
					<div className="card-main challenge-card" onClick={this.toggleDetails} style={inProgressStyle} >
						<NameElement name={this.props.name} />
						<PointsElement name={this.props.name} points={this.props.points} />
					</div>
					{expanded && (
						<div className="card-details">
							<ClueElement clue={this.props.clue} />
							<br />
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
