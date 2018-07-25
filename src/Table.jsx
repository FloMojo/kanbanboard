import React from 'react';
import Card from './Card';

export default function Table(props){
    const listOfItems = [];
    var index = 0;
    var max = 0;
    var table = [];
    var header = [];
    
    for (var item in props.items){
        if(Array.isArray(props.items[item].items)){
            listOfItems.push(props.items[item].items);
            header.push(<div className="divTableHead">{props.items[item].name}</div>);
            max = props.items[item].items.length > max ? props.items[item].items.length : max;
        }else{
            console.log("No array:", props.items[item].items);
        }
    }
    
    while (index < max){
        let row = [];
        //console.log(listOfItems);
        listOfItems.forEach(function(item){
            if(item.length > index){
                console.log(item[index]);
                var id = item[index].id;
                row.push(<div className="divTableCell" key={item[index].id} onClick={() => props.onItemClicked(id)}><Card text={item[index].text}/></div>);
            }else{
                row.push(<div className="divTableCell"></div>);
            }
        });
        table.push(row);
        
        index++;
    }

    console.log(table);

        
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