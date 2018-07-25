import React from 'react';
import Row from './Row';
import Table from './Table';

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
            <Table items={data} onItemClicked={onItemClicked}/>            
        </div>
        );
    }
}