import React, { Component } from 'react';
import ChallengeElement from './ChallengeElement';

class Challenges extends Component {
	constructor(props) {
		super(props);
		this.state = {
			challenges: []
		};
	}
	
	refreshChallenges(e) {
		//e.preventDefault();
		console.log("Refresh all challenges");
		
		fetch('/challenges')
		.then(res => res.json())
		.then(challenges => this.setState({ challenges }));
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
					This is the information about how you are doing on each of the challenges.
				</p>

				<div className="list-container">
					{this.state.challenges.map(challenge =>
						<ChallengeElement key={challenge.id} id={challenge.id} name={challenge.name} flagHandler={this.refreshChallenges.bind(this)} clue={challenge.clue} cstatus={challenge.cstatus} />
					)}
				</div>
			</div>
		);
	}
}

export default Challenges;
