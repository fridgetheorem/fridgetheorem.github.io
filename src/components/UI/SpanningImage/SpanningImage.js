import React from 'react';
import classes from './SpanningImage.module.css';

const spanningImage = (props) =>{

    return(
        <div className={classes.SpanningImage} style={props.style}>
            <img src={props.imagesrc} alt={props.alt} className={classes.Image}/>
            <div>
                Testing text
            </div>
        </div>
    );
}
export default spanningImage;