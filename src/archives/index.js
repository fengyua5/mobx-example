import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {toJS} from 'mobx';
import axios from 'axios'

@inject((store) => {
  return {
    archives: store.archives,
    changeAtsTitle: store.ats.changeAtsTitle
  }
})
@observer
export default class ArchivesIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.archives.getFolderListAsync1().then(() => {
      console.log('data is loaded')
    });
  }

  render() {
    let props = this.props;
    let {
      archives
    } = this.props;

    // let todos = toJS(archives.todos) || [];
    let todos = archives.todos || [];
    console.log('archives render');
    // tab选中项
    return (
      <div>
        archives: {archives.title}
        <button type="button" onClick={() => {
          props.changeAtsTitle('ats' + Math.random())
        }}>changeAtsTitle
        </button>
        <ul>
          {
            todos.map((todo) => {
              return (
                <li key={todo.id}>{todo.name}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}