import React from 'react';

export default function Row(props){
    return(
        <div className='Row'> 
            <ul>
                {props.items.map(function(item){
                    
                    return <li key={item.id} onClick={() => props.onItemClicked(item)}>{item.text}</li> 
                })}
            </ul>
        </div>
    );
}