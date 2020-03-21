import React, { Component } from 'react';
import HomePage from '../Pages/HomePage/HomePage';
import './Layout.css';

class Layout extends Component{
    render(){
        return(
            <div className="layout">
                <div className="content-container">
                    <div className="layout-content">
                        <HomePage></HomePage>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;
