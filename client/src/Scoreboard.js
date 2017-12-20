import React, { Component } from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';

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

				<PanelGroup>
					{this.state.people.map(person =>
						<Panel collapsible header={person.name} eventKey={person.id}>
							Score: {person.score}
						</Panel>
					)}
				</PanelGroup>
			</div>
		);
	}
}

export default Scoreboard;
