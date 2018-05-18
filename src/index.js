import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store/index.js';
import routers from './router.js';
import {Provider} from 'mobx-react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {configure} from "mobx";
import Loadable from 'react-loadable'
import Loading from './components/Loading';
import Header from './components/Header';

configure({
  enforceActions: true
});

const Index = () => {
  return (
    <div>Index</div>
  )
};


ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter>
      <div>
        <Header></Header>
        <div className="ic-content">
          <Route exact path="/" component={Index}/>
          <Route
            path="/(b|c)"
            component={Loadable({
              loader: () => import('./List/index.js'),
              loading: Loading
            })}
          />
          <Route
            path="/(archives|archives2)"
            component={Loadable({
              loader: () => import('./archives/index.js'),
              loading: Loading
            })}
          />
        </div>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
