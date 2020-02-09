import React from 'react';
import classes from './Parallax.module.css';

const parallax = (props) =>{
    return(
        <div className={classes.ParallaxWrapper}
            style={{
                backgroundImage:`${props.backgroundImage}`,
                height:`${props.height}`
            }} 
        >
            {props.children}
        </div>
    );
}

export default parallax;