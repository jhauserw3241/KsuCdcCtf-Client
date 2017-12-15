import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Header from './Header';
import { Main } from './routes';
import './index.css';

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
