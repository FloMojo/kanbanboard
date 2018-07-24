import React from 'react';
import Row from './Row';

export default class Board extends React.Component{
    constructor(props){
        super(props);

        this.state = props;
    }


    render(){
        const {data} = this.state;
        const {onItemClicked} = this.props;

        return (
        <div className='Board'>
            <Row title='Backlog' items={data.backlog} onItemClicked={onItemClicked}/>
            <Row title='Ready' items={data.ready} onItemClicked={onItemClicked}/>
            <Row title='Coding' items={data.coding} onItemClicked={onItemClicked}/>
            <Row title='Test' items={data.test} onItemClicked={onItemClicked}/>
            <Row title='Done' items={data.done} onItemClicked={onItemClicked}/>
        </div>
        );
    }
}