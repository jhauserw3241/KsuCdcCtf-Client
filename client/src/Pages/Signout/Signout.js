import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom';

class Signout extends Component {
	constructor(props) {
		super(props);
		signout();
	}

	signout() {
		console.log("Signout initiated");
		fetch(`/signout`, {
			method: 'POST',
			credentials: 'include'})
		.then((response) => response.json())
		.then((data) =>
		{
			console.log("Signout");
			<Redirect to='/scoreboard'  />
		})
	}
	
	render() {
		return (
			<div className="Signout">
				Signout page
			</div>
		);
	}
}

export default Signout;
