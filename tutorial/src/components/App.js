import React, { Component } from 'react';
import logo from './assests/logo.svg';
import './styles/App.css';
import List from './List'

class App extends Component {
  
  render() {
    return (
      <div>
        <MinForm question_id="" />
        <List question_id="" />
      </div>
    );
  }
}

export default App;
