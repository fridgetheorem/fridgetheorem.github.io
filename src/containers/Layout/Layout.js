import React, { Component } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import classes from './Layout.module.css';
import HomePage from '../HomePage/HomePage';

class Layout extends Component{
    render(){
        return(
            <div className={classes.Layout}>
                <NavigationBar></NavigationBar>
                <HomePage></HomePage>
            </div>
        );
    }
}

export default Layout;
