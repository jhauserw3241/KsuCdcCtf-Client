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
	
	sendFlagToServer(user, id, flag) {
		fetch(`/challenges/${user}&${id}&${flag}`, {
			method: 'POST',
			credentials: 'include'})
		.then((response) => response.json())
		.then((data) =>
		{
			console.log(data.cstatus);
			this.props.flagHandler();
		})
	}

	render() {
		return (
			<div className="left">
				Flag:
				<input type="text" value={this.state.flag} onChange={(event) => {this.setSetState({flag: event.target.value})}} />
				<Button onClick={()=>this.sendFlagToServer("test", this.props.id, this.state.flag)}>
					Check
				</Button>
			</div>
		);
	}
}

export default FlagElement;