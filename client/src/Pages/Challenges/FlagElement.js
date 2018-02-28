import React, { Component } from 'react';

class FlagElement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flag: ""
		}

		this.sendFlagToServer = this.sendFlagToServer.bind(this);
	}
	
	sendFlagToServer(event) {
		event.preventDefault();

		// Submit flag to server
		fetch(`/submit/${this.state.flag}`, {
			method: 'POST',
			credentials: 'include'})
		.then((response) => response.json())
		.then((data) =>
		{
			this.props.flagHandler(data.status);
		})
	}

	render() {
		return (
			<form methods="POST" onSubmit={this.sendFlagToServer}>
				<fieldset>
					<label className="flag-label" htmlFor="flag">Flag:</label>
					<input
						type="text"
						name="flag"
						onChange={(event) => {this.setState({flag: event.target.value})}} />
					<input
						className="flag-check-btn"
						type="submit"
						value="Check" />
				</fieldset>
			</form>
		);
	}
}

export default FlagElement;
