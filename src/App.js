import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StartPage from './StartPage';
import KanbanRouter from './KanbanRouter';

class App extends Component {
  constructor(){
    super();
  }
  render() {
    return ( <KanbanRouter><StartPage /></KanbanRouter> );
  }
}

export default App;
