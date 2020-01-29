import React, { Component } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import classes from './Layout.module.css';
import HomePage from '../HomePage/HomePage';
import ResumePage from '../ResumePage/ResumePage';
import {Route, Switch} from 'react-router-dom';

class Layout extends Component{
    render(){
        return(
            <div className={classes.Layout}>
                <NavigationBar></NavigationBar>
                <Switch>
                    <Route path="/work" component={ResumePage}/>
                    <Route path="/" component={HomePage}/>
                </Switch>
            </div>
        );
    }
}

export default Layout;
