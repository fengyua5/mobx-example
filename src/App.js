import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {observer, inject} from 'mobx-react';
import {Link} from 'react-router';
import Header from './components/Header';

@observer
class App extends Component {
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
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;