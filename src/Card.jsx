import React from 'react';

export default function Card(props){
    return(
        <div className="Card" key={props.item.id} onClick={() => props.onItemClicked(props.item.id)}>{props.item.text}</div>
    );
}