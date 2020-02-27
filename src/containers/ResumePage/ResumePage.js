import React, { Component } from 'react';
import classes from './ResumePage.module.css';
import SpanningImage from '../../components/UI/SpanningImage/SpanningImage';
import BellandHowell from '../../assets/images/BellAndHowell.png';
import TimelineWrapper from '../../components/Timeline/TimelineWrapper';
import TimelineElem from '../../components/Timeline/TimelineElem';

class ResumePage extends Component{
    constructor(props){
        super(props);
        this.Zehrs = `https://searchlogovector.com/wp-content/uploads/2018/10/zehrs-logo-vector.png`;
    }
    render(){
        return(
            <div className={classes.Main}>
                <TimelineWrapper height="600px" 
                imageStyle={{
                    filter:'blur(6px)',
                    transition: 'filter .25s',
                }}
                beginText="Born in December of 1999"
                >
                    <TimelineElem
                    backgroundImage={this.Zehrs} 
                    title="Zehrs Markets"
                    startDate="Apr. 2017"
                    endDate="Aug. 2018"
                    height="auto"
                    >
                        <div className="body-background">
                            <div className="green-highlight job-responsibility-list">
                                <ul>
                                    <li>
                                        Provided friendly <mark>service</mark> to patrons
                                    </li>
                                    <li>
                                        Worked closely with coworkers to maintain a <mark>clean</mark> work environment
                                    </li>
                                    <li>
                                        Developed <mark>customer service</mark> and <mark>communication skills</mark> on the job
                                    </li>
                                    <li>
                                        Coordinated with team members to assure timely completion of evening tasks
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TimelineElem>
                    <TimelineElem
                    backgroundImage={`https://uwaterloo.ca/science/sites/ca.science/files/uploads/images/university_sign_-_banner.jpg`}
                    title="University of Waterloo"
                    height="auto"
                    startDate="Sep. 2019"
                    >
                        <div className="body-background red-highlight">
                            <div className="subtitle">
                                Honours Computer Science (Co-op)
                            </div>
                            <div style={{padding:"6px"}}>
                                At the University of Waterloo, I am studying Computer Science. 
                                My favourite degree courses that I've taken so far are <mark>CS245</mark> and <mark>CS246E</mark>
                            </div>
                            <div style={{padding:"6px"}}>
                                I really enjoy learning more about Computer science, but that isn't to say it is my only interest. 
                                For instance, one of my other favourite courses I've taken was <mark>ENGL208B</mark>, intro to Science Fiction literature
                            </div>
                        </div>
                    </TimelineElem>
                    <TimelineElem
                    backgroundImage={BellandHowell}
                    title="Bell and Howell"
                    height="auto"
                    startDate="May 2019"
                    endDate="Aug. 2019">
                        <div className="body-background ">
                            <div className="subtitle">
                                <i>Software Developer</i>
                            </div> 
                            <div className='blue-highlight job-responsibility-list'>
                                <ul>
                                    <li>
                                        Wrote <mark>VB</mark> scripts to track document production on the US Census, managing roughly <b>400 million</b> mailpieces
                                    </li>
                                    <li>
                                        Developed <mark>C#</mark> COM-Buildable objects to generate company-specific file formats
                                    </li>
                                    <li>
                                        Created an XML-based user interface structure to manage several production datapoints for all clients
                                    </li>
                                    <li>
                                        Translated <mark>Bash</mark> build scripts into <mark>Batch</mark>, saving <b>10 hours</b> of R&D into Android NDK
                                    </li>
                                    <li>
                                        Updated 30 year-old <mark>C</mark> code to be built for Android API 29, across <b>60 files</b>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TimelineElem>
                </TimelineWrapper>
            </div>
        );
    }
}

export default ResumePage;