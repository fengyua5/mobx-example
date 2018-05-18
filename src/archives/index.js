import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {toJS} from 'mobx';
import axios from 'axios'
import SlideList from '../components/SlideList/index';
import {Link, Route} from 'react-router-dom';

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

  componentDidMount() {
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
    // tab选中项
    return (
      <div>
        <Link to='/archives2/2'>detail</Link>
        <ul>
          {
            todos.map((todo) => {
              return (
                <li key={todo.id}>{todo.name}</li>
              )
            })
          }
        </ul>
        <Route
          path="/archives2/:id"
          render={(props) => {
            console.log(111111);
            return (
              <SlideList type={archives.type} show="true">
                <h2>{props.match.params.id}</h2>
              </SlideList>
            )
          }}
        />
      </div>
    )
  }
}