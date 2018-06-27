import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {observer, inject} from 'mobx-react';
import {Link} from 'react-router';
import Header from './components/Header';
const userjson = require("../api/user.json");
const children = require("../api/children.json");
const industry = require("../api/industry.json");
const { normalize, schema } = require('normalizr');

@observer
class App extends Component {

  constructor(props){
    super(props);

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

  render() {
    console.log('render');
    let store = this.props.todos;

    return (
      <div>
        <Header></Header>
        <div
          style={{width: '300px', paddingTop: '57px'}}
        >
          <Link style={{color: 'black'}} to={'/archives'}>archives</Link><br />
          <Link style={{color: 'black'}} to={'/ats'}>ats</Link>
        </div>
        <div style={{paddingLeft: '300px'}}>
        </div>
      </div>
    )
  }
}

export default App;
