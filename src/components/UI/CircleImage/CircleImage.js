import React from 'react';
import './CircleImage.css';

const circleImage = props =>{
    return(
            <img alt="circular" src={props.image}
            style={{
                height:props.height,
                width:props.width,
                ...props.style
            }}
            className="circleImage"
            />
    );
}

export default circleImage;