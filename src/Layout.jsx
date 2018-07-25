import React from 'react';


export default function Layout(props){
    const {newItem} = props;
    const {board}  = props;

    return (
        <div>
            <div className='NewItem'>
                {newItem}
            </div>
            <div className='Board'>
                {board}
            </div>

        </div>
    );
}