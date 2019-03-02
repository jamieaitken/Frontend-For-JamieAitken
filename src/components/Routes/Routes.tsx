import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProjectList from '../ProjectList/ProjectList';
import About from '../About/About';
import Experience from '../Experience/Experience';

export interface Props {

}


export default class Routes extends Component<Props, object>{
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={About}/>
                    <Route path="/projects" component={ProjectList}/>
                    <Route path="/experience" component={Experience}/>
                </Switch>
            </Router>
        )
    };
}