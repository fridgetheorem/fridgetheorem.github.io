
import React from 'react';
import classes from './NavigationTitle.module.css'

const NavigationTitle = props =>{
    return(
        <div className={classes.NavigationTitle}>
            <p className={classes.Text}>{props.children}</p>
        </div>
    )
}

export default NavigationTitle;