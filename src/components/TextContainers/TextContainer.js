import React from 'react';
import classes from './TextContainer.module.css';

const textContainer = (props) => {

    return(
        <div className={classes.TextContainer}>
            {props.children}
        </div>
    );
}

export default textContainer;