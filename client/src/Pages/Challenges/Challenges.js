import React, { Component } from 'react';
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
		return (
			<div className="Challenges">
				<main>
					{this.props.children}
				</main>
				<p className="Challenges-intro">
					This is the  information about how you are doing on each of the challenges.
				</p>

				<div className="list-container">
					{this.state.challenges.map(challenge =>
						<ChallengeElement key={challenge.id} name={challenge.name} flag={challenge.answer} clue={challenge.clue} />
					)}
				</div>
			</div>
		);
	}
}

export default Challenges;
