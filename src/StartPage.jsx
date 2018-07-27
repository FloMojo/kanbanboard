import React from 'react';
import { Link } from 'react-router-dom';

export default function StartPage(){
    return (
        <div className="divStartPage">
        <Link className='divBtn' to='./newItem'>Neue Karten</Link>
        <Link className='divBtn' to='./board'>Zum Board</Link>
        </div>
    );
}