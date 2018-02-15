import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application.react';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Application appName="hotelmap" appVersion="1.0"/>, document.getElementById('root'));
registerServiceWorker();
