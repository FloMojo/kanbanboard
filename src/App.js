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
      data : {
        backlog : {
          //items : [{id : 1,text : 'BL3'}],
          items : [ ],
          name : "Backlog"
      },
      ready : { 
          //items : [{id :2,text : 'R3'}],
          items : [ ],
          name : "Ready"
      },
      coding: { 
          //items : [{id : 3,text : 'CO1'}],
          items : [ ],
          name : "Coding"
      },
      test: 
          {
          // items : [{id : 4,text : 'T1'}],
          items : [ ],
          name : "Test"
      },
      done: {
          //items : [ {id : 5,text : 'D1'}],
          items : [ ],
          name : "Done"
      }
      }
    }
  }

  onNewItem(text){
    console.log(text);
    /*
    this.setState(function(oldState,oldProp){
      oldState.data.backlog.items.push({
        id : this.model.getId(),
        text : text
      });

      return oldState;
    });
    */
    let card = { text : text };

    fetch('http://localhost:8081/addCard',{ 
      method : 'post',     
      headers: { 'Accept': 'application/json','Content-Type': 'application/json'},
      body : JSON.stringify(card)
    })
    .then(response => response.json())
    .then(body => this.setState((oldState,oldProps)=> { 
      oldState.data.backlog.items.push(body);
      return oldState;
    }));
  }

  onItemClicked(item){    
    this.model.setItemNextStep(item);
    this.setState({
      data : this.model.getData()
    });

    console.log(this.model.getData());
  }
  componentDidMount(){
    console.log("componentDidMount");

    console.log("initial state",this.state.data);

    fetch('http://localhost:8081/getCards')
     .then(data => { return data.json();})
     .then(cards =>{ this.setState({ data : cards }); console.log("After set State"); })
     .catch(()=>{console.log("Error while fetching data");});
  }
  componentWillMount(){
    console.log("componentWillMount");
    // see https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/, but book says no setState in componentDidMount
    // fetch('http://localhost:8081/getCards')
    // .then(data => { return data.json();})
    // .then(cards =>{ this.setState({ data : cards },()=>{console.log("State set",this.state);}) });
  }
  render() {
    console.log(`render app, data ${this.state.data}`);
    console.log(this.state.data);

    const newItem = <NewItem onNewItem={this.onNewItem} />;
    const board   = <Board data={this.state.data} onItemClicked={this.onItemClicked}/>;

    return (
      <div className="App">
          <Layout data={this.state.data} newItem={newItem} board={board}/>
      </div>
    );
  }
}

export default App;
