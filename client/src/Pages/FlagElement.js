import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class FlagElement extends Component {	
	printTest() {
		console.log("test");
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