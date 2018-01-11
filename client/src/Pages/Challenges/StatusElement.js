import React, { Component } from 'react';

class StatusElement extends Component {
	render() {
		return (
			<div className="right">
				{this.props.cstatus}
			</div>
		);
	}
}

export default StatusElement;