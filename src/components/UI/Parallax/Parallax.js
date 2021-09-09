import React from 'react';
import classes from './Parallax.module.css';

const parallax = (props) =>{
    return(
        <div className={classes.ParallaxWrapper}
            style={{
                height:`${props.height}`
            }} 
        >
            <div  
            className={classes.ParallaxImage}
            style={{
                backgroundImage:`url(${props.src})`,
                height:`${props.height}`,
                ...props.imageStyle
            }}/>

            <div className={classes.Body}>
                {props.children}
            </div>
        </div>
    );
}

export default parallax;