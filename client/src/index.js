import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Header from './Pages/Header';
import { Main } from './routes';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './CSS/Card.css';

/*const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		this.isAuthenticated = true
		setTimeout(cb, 100) // fake async
	},
	signout(cb) {
		this.isAuthenticated = false
		setTimeout(cb, 100)
	}
}

const AuthButton = withRouter(({history}) => (
	fakeAuth.isAuthenticated ? (
		<p>
			Welcome! <button onClick={() => {
				fakeAuth.signout(() => history.push('/'))
			}}>Signout</button>
		</p>
	) : (
		<p>You are not logged in.</p>
	)
))

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		fakeAuth.isAuthenticated ? (
			<Component {...props} />
		) : (
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location }
			}} />
		)
	)}>
)*/

const App = () => (
	<div>
		<Header />
		<Main />
	</div>
)

render((
	<BrowserRouter>
		<div>
			<App />
		</div>
	</BrowserRouter>),
	document.getElementById('root')
);

registerServiceWorker();
