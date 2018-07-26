import React from 'react';


export default function Layout(props){
    const {newItem} = props;
    const {board}  = props;
    //board.props.data = props.data;

    console.log("Layout data",props.data);
    return (
        <div>
            <div>
                {newItem}
            </div>
            <div className='Board'>
                {board}
            </div>

        </div>
    );
}