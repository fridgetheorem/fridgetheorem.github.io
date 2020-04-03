import React from 'react';
import classes from './SpanningImage.module.css';

const spanningImage = (props) =>{

    return(
        <div className={classes.SpanningImage} style={props.style}>
            <div className={props.noBorders? "" : classes.Borders}>
                <div style={{
                    backgroundImage: `url(${props.src})`,
                    height:props.height,
                    width:props.width
                }}
                className={classes.Image}>
                    <div className={classes.Content}>
                        {props.children}
                    </div>
                </div>
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