import React, { Component } from 'react';
import { PanelGroup, Panel, Button } from 'react-bootstrap';

class Challenges extends Component {
	constructor(props) {
		super(props);
		this.state = {
			opened: false,
			challenges: []
		};
		this.showDetails = this.showDetails.bind(this);
	}

	componentDidMount() {
		fetch('/challenges')
		.then(res => res.json())
		.then(challenges => this.setState({ challenges }));
	}

	showDetails() {
		console.log("State");
		console.log(this.state);
		const { opened } = this.state;
		this.setState({
			// toggle value of `opened`
			opened: !opened,
		});
	}

	render() {
		const { opened } = this.state;

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
							<div className="card-header" onClick={this.showDetails}>
								<div className="card-left">
									{challenge.name}
								</div>
							</div>
							{opened && (
								<div className="card-details">
									<div className="card-left">
										Flag:
										<input type="text" defaultValue={challenge.answer} />
										<Button>
											Check
										</Button>
									</div>
									<br/>
									<div className="card-left">
										Clue: {challenge.clue}
									</div>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Challenges;
