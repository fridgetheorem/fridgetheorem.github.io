import React, { Component } from 'react';
import classes from './ResumePage.module.css';
import SpanningImage from '../../components/UI/SpanningImage/SpanningImage';
import BellandHowell from '../../assets/images/BellAndHowell.png';

class ResumePage extends Component{

    render(){
        return(
            <div className={classes.Main}>
                <SpanningImage imagesrc={BellandHowell} alt="Bell and Howell"></SpanningImage>
                <SpanningImage imagesrc={BellandHowell} alt="Bell and Howell"></SpanningImage>
                <SpanningImage imagesrc={BellandHowell} alt="Bell and Howell"></SpanningImage>
                <SpanningImage imagesrc={BellandHowell} alt="Bell and Howell"></SpanningImage>
                <SpanningImage imagesrc={BellandHowell} alt="Bell and Howell"></SpanningImage>
                <SpanningImage imagesrc={BellandHowell} alt="Bell and Howell"></SpanningImage>
            </div>
        );
    }
}

export default ResumePage;