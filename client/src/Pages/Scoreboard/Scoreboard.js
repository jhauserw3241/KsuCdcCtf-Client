import React, { Component } from 'react';
import ScoreboardElement from './ScoreboardElement';

class Scoreboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			people: [],
			num_people: -1
		};
	}

	componentDidMount() {
		fetch('/scoreboard')
		.then(res => res.json())
		.then(people => this.setState({
			people: people,
			num_people: people.length
		}));
	}
	
	render() {
		var midpoint = this.state.num_people / 2;
		var first_half_people = this.state.people.slice(0, midpoint);
		var second_half_people = this.state.people.slice(midpoint, this.state.num_people);

		return (
			<div className="Scoreboard">
				<p className="Scoreboard-intro">
					Check out the below ranking to see how you are doing
					compared to your peers!
				</p>

				<div className="list-container scoreboard-container">
					<div className="list-column">
						{first_half_people.map(person =>
							<ScoreboardElement key={person.eid} eid={person.eid} score={person.score} />
						)}
					</div>
					<div className="list-column">
						{second_half_people.map(person =>
							<ScoreboardElement key={person.eid} eid={person.eid} score={person.score} />
						)}
					</div>
				</div>

				<main>
					{this.props.children}
				</main>
			</div>
		);
	}
}

export default Scoreboard;
