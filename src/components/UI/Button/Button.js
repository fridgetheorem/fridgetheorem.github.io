import React from 'react'
import './Button.css';

const button = props =>{
    return(
        <div className="button-wrapper"
        onClick={props.clicked}>
            {props.children}
        </div>
    )
}

export default button;