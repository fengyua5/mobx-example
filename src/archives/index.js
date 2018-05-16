import React, {Component} from 'react';
import {inject, observer} from "mobx-react/index";

@inject((store) => {
  return {
    archives: store.archives,
    atsTitle: store.ats.title,
    changeAtsTitle: store.ats.changeAtsTitle
  }
})
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
        archives: {props.archives.title}
        this is ats title : {props.atsTitle}
        <button type="button" onClick={() => {
          props.changeAtsTitle('ats' + Math.random())
        }}>changeAtsTitle
        </button>
      </div>
    )
  }
}