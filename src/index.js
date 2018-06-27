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

configure({
  enforceActions: true
});

const Index = () => {
  return (
    <div>1ssssffs</div>
  )
};

const dialog1 = (props) => {
  return (
    <div>dissalwssww444og1234</div>
  )
};

const DialogRoute = ({component, wrapperParams, ...props}) => {
  let Wrapper = component;
  return (
    <Route
      {...props}
      render={(props) => {
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
          <Route exact path="/app" component={Loadable({
            loader: () => {
              return import(/* webpackChunkName: "app1" */'./App.js');
            },
            loading: Loading
          })}/>
          <Route
            path="/index"
            component={Loadable({
              loader: () => {
                return import(/* webpackChunkName: "index" */'./list/index.js');
              },
              loading: Loading
            })}
          />
          <Route
            path="/(archives|resume)"
            component={Loadable({
              loader: () => import(/* webpackChunkName: "archives" */'./archives/index.js'),
              loading: Loading
            })}
          />
        </div>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);