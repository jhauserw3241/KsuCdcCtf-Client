import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SubmitElement extends Component {	
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
		return (
			<div className="left">
				<Button onClick={()=>this.printTest()}>
					Submit
				</Button>
			</div>
		);
	}
}

export default SubmitElement;