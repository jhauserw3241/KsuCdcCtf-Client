import React from 'react';
import { render } from 'react-dom';
import './index.css';
import About from './About';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';

/*ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Home />, document.getElementById('root'));*/


// You can choose your kind of history here (e.g. browserHistory)
import { BrowserRouter } from 'react-router-dom';

import { Header, Main } from './routes';

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
