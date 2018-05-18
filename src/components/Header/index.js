import React, {Component} from 'react';
import './less/index.less';
import {Link} from 'react-router-dom';

const NAVS_DATA = [
  {
    key: 'index',
    name: '首页',
    link: '/index'
  },
  {
    key: 'archives',
    name: '人才库',
    link: '/archives'
  },
  {
    key: 'ats',
    name: 'ATS',
    link: '/ats'
  }
];

export default class Header extends Component {
  render() {
    return (
      <div className="ic-header">
        <ul className="ic-header-content clearfix">
          {
            NAVS_DATA.map((nav) => {
              return (
                <li key={nav.key}>
                  <Link to={nav.link}>{nav.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
