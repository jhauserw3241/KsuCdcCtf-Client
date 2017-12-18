import React, { Component } from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';

class Home extends Component {
	state = {challenges: []}

	componentDidMount() {
		fetch('/users')
		.then(res => res.json())
		.then(challenges => this.setState({ challenges }));
	}
	
	render() {
		return (
			<div className="Home">
				<main>
					{this.props.children}
				</main>
				<p className="Home-intro">
					Logan was here
				</p>
		
				<h1>Users</h1>
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

export default Home;
