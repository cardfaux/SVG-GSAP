import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './loader';

import './styles.css';

function App() {
	return (
		<div className='App'>
			<Loader />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
