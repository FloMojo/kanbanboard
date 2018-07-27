import React from 'react';

export default class NewItem extends React.Component{
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = { inputValue : "" };
    }
    
    onChange(evt){
        this.setState({
            inputValue : evt.target.value
        });
    }

    onClick(evt){
        console.log(`Button clicked, value ${this.state.inputValue}`);
        let card = { text : this.state.inputValue };

       fetch( 'http://localhost:8081/addCard', { method : 'post', headers: { 'Accept': 'application/json','Content-Type': 'application/json'}, body : JSON.stringify(card) })
       .then(response => response.json())
       .then(card => console.log(`Card ${card} added`))
       .catch(err => console.log(err));
    }

    render(){
        return (
        <div className='NewItem'> 
            <label>Beschreibung der Task</label>
            <input onChange={this.onChange} />
            <button onClick={this.onClick} >Hinzufügen</button>
        </div>
        );
    }
}