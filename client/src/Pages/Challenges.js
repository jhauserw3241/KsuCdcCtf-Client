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
				
				<div className="card-container">
					{this.state.challenges.map(challenge =>
						<div className="card">
							<div className="card-header">
								<div className="card-left">
									{challenge.name}
								</div>
							</div>
							<div className="card-details">
								<div className="card-left">
									Flag:  
									<input type="text" value={challenge.answer} />
									<button>
										Check
									</button>
								</div>
								<br/>
								<div className="card-left">
									Clue: {challenge.clue}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Challenges;
