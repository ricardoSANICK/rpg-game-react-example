import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './config/store';
import { Provider } from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root') );
serviceWorker.unregister();