import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom';

class Signout extends Component {
	signout() {
		fetch(`/signout`, {
			method: 'POST',
			credentials: 'include'})
		.then((response) => response.json())
		.then((data) =>
		{
			console.log("Signout");
		})
	}
	
	componentDidMount() {
		this.props.signout(() => {console.log("Got to the signout");});
	}
	
	render() {
		return (
			<Redirect to='/scoreboard' />
		);
	}
}

export default Signout;
