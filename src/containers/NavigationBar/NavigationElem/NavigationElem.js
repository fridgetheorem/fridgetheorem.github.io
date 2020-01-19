import React from 'react';
import classes from './NavigationElem.module.css'

const NavigationElem = props =>{
    return(
        <div className={classes.NavigationElem}>
            <p>{props.children}</p>
        </div>
    )
}

export default NavigationElem;