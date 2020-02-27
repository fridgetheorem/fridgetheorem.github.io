import React from 'react';
import classes from './Timeline.module.css';

const timelineWrapper = (props) =>{
    return(
        <div className={classes.TimelineWrapper}>
            <div className={classes.TimelineBegin}>
                <div className={classes.TimelineBeginSymbol}></div>
                <div className={classes.TimelineBeginText}>
                    {props.beginText || "In the beginning..."}
                </div>
                <div className={classes.TimelineBeginRect}>
                </div>
            </div> 
            <div className={classes.TimelineRect}>
            </div>
            {props.children}
        </div>
    );
}

export default timelineWrapper;