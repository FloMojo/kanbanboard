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

        const {onNewItem} = this.props;

        if (typeof onNewItem === 'function'){
            onNewItem(this.state.inputValue);
        }else{
            console.log(`onNewItem is no function`);
        }
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