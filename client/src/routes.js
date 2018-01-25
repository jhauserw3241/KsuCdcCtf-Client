import React, { Component } from 'react';
import {
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import Scoreboard from './Pages/Scoreboard/Scoreboard';
import Challenges from './Pages/Challenges/Challenges';
import Login from './Pages/Login/Login';
import Signout from './Pages/Signout/Signout';

export class Main extends Component {	
	render() {		
		return(
			<main>
				<Switch>
					<Route exact path='/' component={Scoreboard} />
					<Route exact path='/scoreboard' component={Scoreboard} />
					<Route exact path='/challenges' render={() =>
						this.props.isAuthenticated ? (
							<Challenges />
						) : (
							<Redirect to={'/login'} />
						)
					} />
					<Route path='/login' render={() => 
						this.props.isAuthenticated ? (
							<Redirect to={'/challenges'} />
						) : (
							<Login login={this.props.login} />
						)
					} />
					<Route exact path='/signout' render={() =>
						this.props.isAuthenticated ? (
							<Signout signout={this.props.signout} />
						) : (
							<Scoreboard />
						)
					} />
				</Switch>
			</main>
		);
	}
}
