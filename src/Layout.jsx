import React from 'react';


export default function Layout(props){
    const {header} = props;
    const {board}  = props;

    return (
        <div>
            <div className='Header'>
                {header}
            </div>
            <div className='Board'>
                {board}
            </div>
        </div>
    );
}