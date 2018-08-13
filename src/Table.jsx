import React from 'react';
import Card from './Card';

export default function Table(props){
    console.log("Table props",props);

    const listOfItems = [];

    var 
    index   = 0,
    max     = 0,
    table   = [],
    header  = [],
    cards   = props.items;
    
    console.log({cards});

    for (var item in cards){
        if(Array.isArray(cards[item].items)){
            listOfItems.push(cards[item].items);
            header.push(<div className="divTableHead">{cards[item].name}</div>);
            max = cards[item].items.length > max ? cards[item].items.length : max;
        }else{
            console.log("No array:", cards[item].items);
        }
    }
    
    while (index < max){
        let row = [];
        //console.log(listOfItems);
        listOfItems.forEach(function(item){
            if(item.length > index){
                console.log(item[index]);
                var id = item[index].id;
                //row.push(<div className="divTableCell" key={item[index].id} onClick={() => props.onItemClicked(id)}><Card item={item[index]}/></div>);
                row.push(<div className="divTableCell" ><Card item={item[index]} onItemClicked={props.onItemClicked}/></div>);
            }else{
                row.push(<div className="divTableCell"></div>);
            }
        });
        table.push(row);
        
        index++;
    }

    //console.log(table);

        
    var tableRender = <div className='divTable blueTable'>
                            <div className='divTableHeading'>
                            <div className='divTableRow'>{header}</div>
                            </div>
                            <div className='divTableBody'>
                            {table.map(function(item){
                                return <div className='divTableRow'>{item.map(function(row){
                                    return row;
                                })}</div>;
                            })}
                            </div>
                    </div>;

    return tableRender;
}