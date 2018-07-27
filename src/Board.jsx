import React from 'react';
import Table from './Table';

export default class Board extends React.Component{
    constructor(props){
        super(props);

        this.state = { data : {}};
        this.onCardClicked = this.onCardClicked.bind(this);
    }
    componentDidMount(){
        fetch('http://localhost:8081/getCards')
        .then(response => response.json() )
        .then(cards => this.setState({ data : cards }));
    }
    onCardClicked(item){
        console.log(`Item ${item} clicked`);
        fetch('http://localhost:8081/setNewStatus',{ 
            method : 'post',headers: { 'Accept': 'application/json','Content-Type': 'application/json'}, body : JSON.stringify({ itemId : item })})
        .then(response => response.json())
        .then(cards => this.setState({ data : cards }) );
    }
    render(){
        const {data}            = this.state;

        return (
        <div className='Board'>
            <Table items={data} onItemClicked={this.onCardClicked}/>            
        </div>
        );
    }
}