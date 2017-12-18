import React, { Component } from 'react';
import Card from './Card';

class Home extends Component {
	state = {users: []}

	componentDidMount() {
		fetch('/users')
		.then(res => res.json())
		.then(users => this.setState({ users }));
	}
	
	render() {
		return (
			<div className="Home">
				<main>
					{this.props.children}
				</main>
				<p className="Home-intro">
					Logan was here
				</p>
				<ul>
					<Card />
					<Card />
				</ul>
		
				<h1>Users</h1>
				{this.state.users.map(user =>
					<div key={user.id}>{user.username}</div>
				)}
			</div>
		);
	}
}

export default Home;
