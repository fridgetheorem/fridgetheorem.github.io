import React from 'react';
import classes from './Timeline.module.css';

const timelineElem = (props) =>{
    let style = { };
    if(props.backgroundImage){
        style['backgroundImage'] =  `url(${props.backgroundImage})`;
    }
    if(props.background){
        style['background'] = props.background;
    }
    console.log(style);
    return(
        <div className={classes.TimelineElem}
            style={{
                height:`${props.height || '150px'}`
            }}
        >
            <div className={classes.TimelineImage}
            style={
                {...style,
                filter: props.filter}
            }
            >

            </div>
            <div
            className={classes.TimelinePoint}/>
            <div className={classes.TimelineElemDate}>
                {`${props.startDate || "Dec. 1999"} → ${props.endDate|| "Present"}`}
            </div>
            <div
            className={classes.TimelineElemWrapper}
            >
                <div className="header-background">
                    <div className="header">
                        {props.title || "Give me a title!"}
                    </div>
                </div>
                <div className="body">
                {props.children || "Give me some body here!"}
                </div>
            </div>
        </div>
    );
}

export default timelineElem;