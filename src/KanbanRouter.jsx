import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Board from './Board';
import NewItem from './NewItem';
import StartPage from './StartPage';

export default function KanbanRouter(){
    return (
        <Switch>
            <Route exact path='/'           component={StartPage} />
            <Route       path='/newItem'    component={NewItem} />
            <Route       path='/board'      component={Board} />
        </Switch>
    );
}