import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class FlagElement extends Component {	
	printTest() {
		console.log("test");
	}
	
	sendFlagToServer = (id, flag) => (event) => {
		console.log("challengeId: " + id);
		console.log("flag: " + flag);
		
		fetch("/challenges", { action: 'submit', id: id, flag: flag }).then((response) =>
		{
			console.log("Got response");
			console.log(response);
		})
	}

	render() {
		if(this.props.readonly) {
			return (
				<div className="left">
					Flag:
					<input type="text" value={this.props.flag} readOnly />
				</div>
			);
		}
		else {
			return (
				<div className="left">
					Flag:
					<input type="text" defaultValue={this.props.flag} />
					<Button onClick={()=>this.sendFlagToServer(this.props.id, this.props.flag)}>
						Check
					</Button>
				</div>
			);
		}
	}
}

export default FlagElement;