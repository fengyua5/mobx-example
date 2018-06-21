import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {observer, inject} from 'mobx-react';
import {Link} from 'react-router';
import Header from './components/Header';
const userjson = require("../api/user.json");


@observer
class App extends Component {

  constructor(props){
    super(props);
    const { normalize, schema } = require('normalizr');

    // Define a users schema
    const user = new schema.Entity('users');

    // Define your comments schema
    const comment = new schema.Entity('comments', {
      commenter: user
    });

    // Define your article
    const article = new schema.Entity('articles', {
      author: user,
      comments: [ comment ]
    });

    const normalizedData = normalize(userjson, article);

    console.log(normalizedData)

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
