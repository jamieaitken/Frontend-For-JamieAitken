import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from '../About/About';

export interface Props {

}


export default class Routes extends Component<Props, object>{
    render(){
        return (
            <Switch>
                <Route exact path="/" component={About}/>
            </Switch>
        )
    };
}