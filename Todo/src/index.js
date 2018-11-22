import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.css';
import './shared/polyfills';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

/* eslint-enable */
registerServiceWorker();
