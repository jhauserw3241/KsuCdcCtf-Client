import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Scoreboard from './Scoreboard';

export const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Scoreboard} />
			<Route exact path='/scoreboard' component={Scoreboard} />
		</Switch>
	</main>
)