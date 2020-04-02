import React from 'react'
import './SpanningColor.css';

const spanningColor = props =>{
    return(
        <div className="spanningColorWrapper"
        style={{
            backgroundColor:props.color,
            ...props.style
        }}>
            <div className="spanningColorContent">
                {props.children}
            </div>
        </div>
    )
}

export default spanningColor;