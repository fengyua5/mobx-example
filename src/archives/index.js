import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {toJS} from 'mobx';

import {Link, Route} from 'react-router-dom';
import {Button, Form, Input} from 'antd';

class Name extends Component{
  constructor(props){
    super(props);
  }

  getDerivedStateFromProps(nextProps, prevState){
    console.log('getDerivedStateFromProps');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('name---', this.refs)
  }

  render(){
    console.log('render');
    return (
      <div>{this.props.name}</div>
    )
  }
}

const FormItem = Form.Item;

@Form.create()
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
    this.state
  }

  componentDidMount() {
    this.props.archives.getFolderListAsync1().then(() => {
      console.log('data is loaded')
    });
    console.log('this.refs', this.refs)
  }

  render() {
    let props = this.props;
    let {
      archives
    } = this.props;

    // let todos = toJS(archives.todos) || [];
    let todos = archives.todos || [];

    const {getFieldDecorator} = this.props.form;
    const aa = getFieldDecorator(`candidatePhone`, {
      rules: [{
        message: '请填写正确手机号'
      }],
      initialValue: '12333333334'
    })(
      <Input
        className="phone-input"
        placeholder="请填写电话号码"
        onChange={() => {
          console.log(2)
        }}
      />
    )
    console.log(aa);
    // tab选中项
    return (
      <div>
        <Link to='/resume/2'>detail</Link>
        <ul>
          {
            todos.map((todo) => {
              return (
                <li key={todo.id}>{todo.name}</li>
              )
            })
          }
        </ul>

        <Name>
          <input ref="name" />
        </Name>
        <Button>submit</Button>
        <Form>
          <FormItem
            className="candidate-phone"
          >
            {

            }
          </FormItem>
        </Form>
      </div>
    )
  }
}