import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import NewItem from './NewItem';
import Board from './Board';
import Model from './Model';

class App extends Component {
  constructor(){
    super();
    this.model = new Model();
    var data = this.model.getData();

    this.onNewItem      = this.onNewItem.bind(this);
    this.onItemClicked  = this.onItemClicked.bind(this);

    this.state ={
      data : data
    }
  }

  onNewItem(text){
    console.log(this.state);
    this.setState(function(oldState,oldProp){
      oldState.data.backlog.items.push({
        id : this.model.getId(),
        text : text
      });

      return oldState;
    });
  }

  onItemClicked(item){    
    this.model.setItemNextStep(item);
    this.setState({
      data : this.model.getData()
    });

    console.log(this.model.getData());
  }

  render() {
    const header = <NewItem onNewItem={this.onNewItem} />;
    const board  = <Board data={this.state.data} onItemClicked={this.onItemClicked}/>;

    return (
      <div className="App">
        A very, very simple kanban board
        <Layout header={header} board={board}/>
      </div>
    );
  }
}

export default App;
