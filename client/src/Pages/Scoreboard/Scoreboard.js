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
					Check out the below ranking to see how you are doing
					compared to your peers!
				</p>

				<div className="list-container">
					{this.state.people.map(person =>
						<ScoreboardElement key={person.eid} eid={person.eid} score={person.score} />
					)}
				</div>
			</div>
		);
	}
}

export default Scoreboard;
