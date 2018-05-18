import React from 'react';
import Loadable from 'react-loadable';


class MyLoadingComponent extends React.Component {
  render() {
    return <div>Loading...</div>;
  }
}

const LoadableAnotherComponent = Loadable({
  loader: () => import('./index2'),
  loading: MyLoadingComponent
});

export default class Hello2 extends React.Component {
  render() {
    return <LoadableAnotherComponent/>;
  }
}