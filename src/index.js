import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/sass/index.css';

render(<App />, document.getElementById('root'));
registerServiceWorker();
