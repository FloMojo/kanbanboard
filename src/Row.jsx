import React from 'react';

export default function Row(props){
    return(
                <div className='BoardRow'>
                {props.items.map(function(item){       
                    return <div key={item.id} onClick={() => props.onItemClicked(item)} className='BoardCell'>{item.text}</div>;
                })}
                </div>
    );
}