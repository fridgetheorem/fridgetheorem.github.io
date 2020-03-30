import React from 'react';
import classes from './SpanningImage.module.css';

const spanningImage = (props) =>{

    return(
        <div className={classes.SpanningImage} style={props.style}>
            <div className={classes.Borders}>
                <div style={{
                    backgroundImage: `url(${props.src})`
                }}
                className={classes.Image}/>
                {props.overlayStyle? 
                <div className={classes.Overlay}
                style={
                    {...props.overlayStyle}
                }> 

                </div>
                :null}
            </div>
        </div>
    );
}
export default spanningImage;