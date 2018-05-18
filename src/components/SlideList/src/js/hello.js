import React from 'react';
import Loadable from 'react-loadable';


class MyLoadingComponent extends React.Component {
  render() {
    return <div>Loading...</div>;
  }
}

const path = './index';

const LoadableAnotherComponent = Loadable({
  loader: () => import(/* webpackChunkName: "index1" */'./index'),
  loading: MyLoadingComponent
});

export default class Hello extends React.Component {
  render() {
    return <LoadableAnotherComponent/>;
  }
}