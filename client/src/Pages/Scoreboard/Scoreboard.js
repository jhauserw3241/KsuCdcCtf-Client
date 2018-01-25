import React, { Component } from 'react';
import ScoreboardElement from './ScoreboardElement';

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
					<center>
						Check out the below ranking to see how you are doing
						compared to your peers!
					</center>
				</p>

				<div className="list-container">
					{this.state.people.map(person =>
						<ScoreboardElement key={person.id} eid={person.eid} score={person.score} />
					)}
				</div>
			</div>
		);
	}
}

export default Scoreboard;
