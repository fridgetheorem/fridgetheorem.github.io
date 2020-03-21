import React from 'react';
import classes from './NavigationItems.module.css';


const navigationItems = (props) =>{

    return(
        <div className={classes.navItems}>
            {props.children}
        </div>
    )
}

export default navigationItems;