import React, { Component } from 'react';

class PointsElement extends Component {
	render() {
		return (
			<div className="right">
				{this.props.points}
			</div>
		);
	}
}

export default PointsElement;