import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class FlagElement extends Component {	
	printTest() {
		console.log("test");
	}
	
	sendFlagToServer = (item) => (event) => {
		console.log("Sending flag to server");
		console.log("userId: " + "test");
		console.log("challengeId: " + item.id);
		console.log("flag: " + item.answer);
	}

	render() {
		return (
			<div className="card-left">
				Flag:
				<input type="text" value={this.props.flag} readOnly />
				<Button onClick={()=>this.printTest()}>
					Check
				</Button>
			</div>
		);
	}
}

export default FlagElement;