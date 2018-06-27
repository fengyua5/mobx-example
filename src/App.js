import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {observer, inject} from 'mobx-react';
import {Link} from 'react-router-dom';
import Header from './components/Header';
const userjson = require("../api/user.json");
const children = require("../api/children.json");
const industry = require("../api/industry.json");
import { normalize, schema } from 'normalizr';
import memoizeOne from '../utils/memoize-one.js';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      data: [1, 2]
    }
  }

  componentDidMount(){
    let user = new schema.Entity('users');
    user.define({
      parent: user
    });
    console.log(normalize(children, user), '----------------kkk');

    let entity = new schema.Entity('industrys', undefined, {idAttribute: 'tid'});
    entity.define({
      child: [entity]
    });
    console.log(normalize(industry, { results: [entity]}), '----------------industrys');
  }

  hello = memoizeOne((data) => {
    console.log('render hello');
    return (
      <ul>
        {
          data.map((item) => {
            return (
              <li key={item}>
                {item}
              </li>
            )
          })
        }
      </ul>
    )
  });

  render() {
    console.log('render');

    return (
      <div>
        <Header />
        <div
          style={{width: '300px', paddingTop: '57px'}}
        >
          <Link style={{color: 'black'}} to={'/archives'}>archives</Link>
          <Link style={{color: 'black'}} to={'/ats'}>ats</Link>
        </div>
        <div style={{paddingLeft: '300px'}}>
        </div>
        {this.hello(this.state.data)}
        <button onClick={() => {
          this.forceUpdate();
        }}>刷新</button>
      </div>
    )
  }
}
