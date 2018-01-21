import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class ChallengeAlert extends Component {
	render() {
		console.log(this.props.status);
		
		if(this.props.status === "Incorrect flag.") {
			return (
				<Alert bsStyle="warning">
					<strong>Incorrect flag!</strong> { this.props.status }
				</Alert>
			);
		}
		else if(this.props.status === "Error connecting to the database.") {
			return (
				<Alert bsStyle="danger">
					<strong>Error:</strong> { this.props.status }
				</Alert>
			);
		}
		else if(this.props.status === undefined) {
			return (
				<Alert bsStyle="danger">
					<strong>Error:</strong> Received undefined status
				</Alert>
			);
		}
		else {
			return (
				<Alert bsStyle="success">
					<strong>Correct!</strong> You submitted the correct flag.
				</Alert>
			);
		}
	}
}

export default ChallengeAlert;
