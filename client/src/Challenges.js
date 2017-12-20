import React, { Component } from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';

class Challenges extends Component {
	state = {challenges: []}

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

				<PanelGroup>
					{this.state.challenges.map(challenge =>
						<Panel collapsible header={challenge.name} eventKey={challenge.id}>
							Answer: {challenge.answer}<br/>
							Clue: {challenge.clue}
						</Panel>
					)}
				</PanelGroup>
			</div>
		);
	}
}

export default Challenges;
