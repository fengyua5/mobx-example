import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/index.js';
import routers from './router.js';
import {Provider} from 'mobx-react';
import { Router, browserHistory } from 'react-router';
import { useStrict } from "mobx";


useStrict(true);

ReactDOM.render(
  <Provider {...store}>
    <Router history={browserHistory} routes={routers}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
