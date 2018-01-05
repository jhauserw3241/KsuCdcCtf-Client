import React, { Component } from 'react';
import ScoreboardElement from './ScoreboardElement';
import './cards.css';

class Scoreboard extends Component {
	state = {people: []}

	componentDidMount() {
		fetch('/scoreboard')
		.then(res => res.json())
		.then(people => this.setState({ people }));
	}
	
	render() {
		return (
			<div className="Scoreboard">
				<main>
					{this.props.children}
				</main>
				<p className="Scoreboard-intro">
					The scores for the participants of the KSU CDC CTF for Spring 2018 are below.
				</p>

				<div className="card-container">
					{this.state.people.map(person =>
						<ScoreboardElement name={person.name} score={person.score} />
					)}
				</div>
			</div>
		);
	}
}

export default Scoreboard;
