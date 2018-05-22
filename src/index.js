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

import SlideList from './components/SlideList/index';

var pathToRegexp = require('path-to-regexp');

configure({
  enforceActions: true
});

const Index = () => {
  return (
    <div>Index</div>
  )
};

const dialog1 = (props) => {
  return (
    <div>dialog1</div>
  )
};

const DialogRoute = ({component, wrapperParams, ...props}) => {
  let Wrapper = component;
  return (
    <Route
      {...props}
      render={(props) => {
        console.log(111111);
        return (
          <SlideList type={1} show="true">
            <Wrapper {...wrapperParams}/>
          </SlideList>
        )
      }}
    />
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
              loader: () => import('./list/index.js'),
              loading: Loading
            })}
          />
          <DialogRoute
            path="/resume/:id"
            component={dialog1}
          />
          <Route
            path="/(archives|resume)"
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
