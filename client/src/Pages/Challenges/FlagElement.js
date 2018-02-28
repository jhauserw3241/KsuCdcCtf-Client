import React, { Component } from 'react';

class FlagElement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flag: ""
		}
	}
	
	sendFlagToServer(flag) {
		fetch(`/submit/${flag}`, {
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
			<form>
				<fieldset>
					<label htmlFor="flag">Flag:</label>
					<input
						type="text"
						name="flag"
						onChange={(event) => {this.setState({flag: event.target.value})}} />
					<input
						className="flag-check-btn"
						type="button"
						value="Check"
						onClick={()=>this.sendFlagToServer(this.state.flag)} />
				</fieldset>
			</form>
		);
	}
}

export default FlagElement;
