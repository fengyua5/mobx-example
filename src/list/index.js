import React from 'react';

import {Route, Link} from 'react-router-dom';
import Loadable from 'react-loadable'

import Loading from '../components/Loading';

const Lists = ({match}) => (
  <div>
    <h2>我是一个列表</h2>
    <ul>
      <li>
        <Link to={`/c/1`}>
          列表下边的第一个
        </Link>
      </li>
      <li>
        <Link to={`/c/2`}>
          列表下边的第二个
        </Link>
      </li>
      <li>
        <Link to={`/c/3`}>
          列表下边的第三个
        </Link>
      </li>
    </ul>
    <Route path={match.url} render={() => (
      <h3>点击上边的列表项此处显示与url地址一样的...</h3>
    )}/>
    <Route
      path={`/c/:id`}
      component={Loadable({
        loader: () => import('./detail.js'),
        loading: Loading
      })}
    />
    dddddddd
  </div>
);

export default Lists;