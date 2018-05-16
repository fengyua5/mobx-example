import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import './less/index.less';

@inject('archives')
@observer
export default class Header extends Component {
  render() {
    return (
      <div className="ic-header">
        <ul className="ic-header-content clearfix">
          <li>首页</li>
          <li>职位</li>
          <li>智能推荐</li>
        </ul>
      </div>
    )
  }
}
