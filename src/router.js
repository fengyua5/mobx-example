import {getState} from './store';
import {browserHistory} from 'react-router';

module.exports = {
  path: '/',
  title: 'e成招聘：一站式AI招聘服务云平台',
  component: require('./App'),
  childRoutes: (r => {
    return r.keys().reduce((pre, cur) => {
      return pre.concat(r(cur));
    }, []);
  })(require.context('./', true, /^\.\/((?!\/)[\s\S])+\/router\.js/))
};


