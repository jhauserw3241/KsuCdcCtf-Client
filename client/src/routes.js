import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Scoreboard from './Scoreboard';
import Challenges from './Challenges';

export const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Scoreboard} />
			<Route exact path='/scoreboard' component={Scoreboard} />
			<Route exact path='/challenges' component={Challenges} />
		</Switch>
	</main>
)