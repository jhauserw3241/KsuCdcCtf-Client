import React, { Component } from 'react';
import { PanelGroup, Panel, Button } from 'react-bootstrap';
import ChallengeElement from './ChallengeElement';

class Challenges extends Component {
	constructor(props) {
		super(props);
		this.state = {
			challenges: []
		};
	}

	componentDidMount() {
		fetch('/challenges')
		.then(res => res.json())
		.then(challenges => this.setState({ challenges }));
	}

	render() {
		const { opened } = this.state;

		return (
			<div className="Challenges">
				<main>
					{this.props.children}
				</main>
				<p className="Challenges-intro">
					This is the  information about how you are doing on each of the challenges.
				</p>

				<div className="card-container">
					{this.state.challenges.map(challenge =>
						<ChallengeElement name={challenge.name} flag={challenge.flag} clue={challenge.clue} />
					)}
				</div>
			</div>
		);
	}
}

export default Challenges;
