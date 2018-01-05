import React, { Component } from 'react';

class ClueElement extends Component {
	render() {
		return (
			<div className="left">
				Clue: {this.props.clue}
			</div>
		);
	}
}

export default ClueElement;