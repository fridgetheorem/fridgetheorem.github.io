import React, { Component } from 'react'
import './PageNav.css';

class PageNav extends Component{

}

export default PageNav;

export const scrollDownButton = props =>{
    return(
        <div className="spanningButton bottom">
            <div className="down-arrow-animated">▼</div>
        </div>
    )
}