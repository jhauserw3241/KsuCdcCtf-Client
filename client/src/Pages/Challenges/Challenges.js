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
		return (
			<div className="Challenges">				
				{ (this.state.alertMsg === "") ?
					<ChallengeAlert status={this.state.alertMsg} /> : null }
				
				<p className="Challenges-intro">
					Welcome! Once you solve a challenge, enter the flag here to advance
					to the next challenge.
					<br />
					If you get stuck, remember Logan is available for questions.
					Good luck!
				</p>

				<div className="list-container">
					{this.state.challenges.map(challenge =>
						<ChallengeElement
							key={challenge.id}
							id={challenge.id}
							name={challenge.name}
							flagHandler={this.handleFlag.bind(this)}
							points={challenge.points}
							clue={challenge.clue}
							cstatus={challenge.cstatus} />
					)}
				</div>

				<main>
					{this.props.children}
				</main>
			</div>
		);
	}
}

export default Challenges;
