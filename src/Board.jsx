import React            from 'react';
import { connect }      from 'react-redux';
import { fetchCards,fetchCardUpdate }   from './actions';
import Table            from './Table';

export class Board extends React.Component{
    constructor(props){
        super(props);

        //this.state = { data : {}};
        this.onCardClicked = this.onCardClicked.bind(this);
    }
    componentDidMount(){
        this.props.dispatch(fetchCards());
        /*
        fetch('http://localhost:8081/getCards')
        .then(response => response.json() )
        .then(cards => this.setState({ data : cards }));
        */
    }
    onCardClicked(item){
        console.log(`Item ${item} clicked`);
        this.props.dispatch(fetchCardUpdate(item));
        // fetch('http://localhost:8081/setNewStatus',{ 
        //     method : 'post',headers: { 'Accept': 'application/json','Content-Type': 'application/json'}, body : JSON.stringify({ itemId : item })})
        // .then(response => response.json())
        // .then(cards => this.setState({ data : cards }) );
    }
    render(){
        console.log(this.props);
        const {cards}            = this.props.cards;

        return (
        <div className='Board'>
            <Table items={cards} onItemClicked={this.onCardClicked}/>            
        </div>
        );
    }
}

const mapStateToProps = state => ({
    cards : state.cards
});

export default connect(mapStateToProps)(Board);