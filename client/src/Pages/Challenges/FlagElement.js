import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class FlagElement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flag: props.flag
		}
	}
	
	componentWillReceiveProps(newProps) {
		this.setState({flag: newProps.flag});
	}
	
	sendFlagToServer(flag) {
		fetch(`/submit/${flag}`, {
			method: 'POST',
			credentials: 'include'})
		.then((response) => response.json())
		.then((data) =>
		{
			console.log(data.status);
			console.log(data);
			this.props.flagHandler(data.status);
		})
	}

	render() {
		return (
			<div className="left">
				Flag:
				<input type="text" value={this.state.flag} onChange={(event) => {this.setState({flag: event.target.value})}} />
				<Button onClick={()=>this.sendFlagToServer(this.state.flag)}>
					Check
				</Button>
			</div>
		);
	}
}

export default FlagElement;
