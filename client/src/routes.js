import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

export const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/home' component={Home} />
		</Switch>
	</main>
)