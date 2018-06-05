
import React, {Component} from 'react';

import {observer, inject} from 'mobx-react';

import {Button} from 'antd';

@inject('ats')
@observer
export default class ArchivesIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;
    // tab选中项
    return (
      <div>
        ats : {props.ats.title}
        <button type="button" onClick={() => {
          props.ats.title = '00000'
        }}>changeTitle</button>
      </div>
    )
  }
}