import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

export const Header = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/home' component={Home} />
			<Route exact path='/about' component={About} />
		</Switch>
	</main>
)

export const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/home' component={Home} />
			<Route exact path='/about' component={About} />
		</Switch>
	</main>
)