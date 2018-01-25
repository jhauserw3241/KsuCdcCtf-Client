import React, { Component } from 'react';
import ChallengeElement from './ChallengeElement';
import ChallengeAlert from './ChallengeAlert';

class Challenges extends Component {
	constructor(props) {
		super(props);
		this.state = {
			challenges: [],
			alertMsg: ""
		};
	}
	
	handleFlag(msg) {
		this.setState({
			alertMsg: msg,
		});
		
		console.log("Refresh all challenges");
		
		fetch('/challenges', {
			credentials: 'include'})
		.then(res => res.json())
		.then(challenges => this.setState({ challenges }));
	}

	componentDidMount() {
		fetch('/challenges', {
			credentials: 'include'})
		.then(res => res.json())
		.then(challenges => this.setState({ challenges }));
	}

	render() {
		const { alertMsg } = this.state;
		
		if(alertMsg === "") {
			return (
				<div className="Challenges">
					<main>
						{this.props.children}
					</main>
					
					<p className="Challenges-intro">
						Welcome! Once you solve a challenge, enter the flag here to advance
						to the next challenge.
						<br />
						If you get stuck, remember Logan is available for questions.
						Good luck!
					</p>

					<div className="list-container">
						{this.state.challenges.map(challenge =>
							<ChallengeElement key={challenge.id} id={challenge.id} name={challenge.name} flagHandler={this.handleFlag.bind(this)} points={challenge.points} clue={challenge.clue} cstatus={challenge.cstatus} />
						)}
					</div>
				</div>
			);
		}
		else {
			return (
				<div className="Challenges">
					<main>
						{this.props.children}
					</main>
					
					<ChallengeAlert status={alertMsg} />
					
					<p className="Challenges-intro">
						This is the information about how you are doing on each of the challenges.
					</p>

					<div className="list-container">
						{this.state.challenges.map(challenge =>
							<ChallengeElement key={challenge.id} id={challenge.id} name={challenge.name} flagHandler={this.handleFlag.bind(this)} points={challenge.points} clue={challenge.clue} cstatus={challenge.cstatus} />
						)}
					</div>
				</div>
			);
		}
	}
}

export default Challenges;
