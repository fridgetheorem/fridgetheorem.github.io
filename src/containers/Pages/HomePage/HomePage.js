import React, { Component } from 'react';
import './HomePage.css';
import SpanningImage from '../../../components/UI/SpanningImage/SpanningImage';
import Parallax from '../../../components/UI/Parallax/Parallax';
import SpanningColor from '../../../components/UI/SpanningColor/SpanningColor';
import CardGallery from '../../../components/UI/CardGallery/CardGallery';
import {PROJECTS as Projects} from './Projects';

class HomePage extends Component{
    render() {
        return (
            <div className="homepage">
                <div className="bg-hue">
                </div> 
                <div className="overlay">
                    <div className="full-page">
                        <div className="homepage-title">
                            Cameron Hadfield
                        </div>
                    </div>
                    <div>
                        <SpanningImage src={"https://firebasestorage.googleapis.com/v0/b/personalwebsiteassets.appspot.com/o/images%2Flandscape_bg.png?alt=media&token=9544e1ee-5b96-449b-9f7e-5fea84f180b9"}
                        overlayStyle={{
                            backgroundColor:"#15244999"
                        }} 
                        >
                            <div className="homepage-header">
                                A little bit about me
                            </div>
                            <div className="homepage-body">
                                <div className="section">
                                    My name is Cameron Hadfield and I currently attend the University of Waterloo for Computer Science
                                </div>
                                <div className="section">
                                    Programming is one of my longest sustained passions. 
                                    I started when my dad got me into BASIC when I was 10 years old,
                                    and I have been in love with programming ever since!
                                </div>
                                <div className="section">
                                    This is not to say that programming is my only interest though!
                                    Over time, I have done many different hobbies and sports:
                                    <ul>
                                        <li>
                                            Curling
                                        </li>
                                        <li>
                                            Fixing clocks/watches
                                        </li>
                                        <li>
                                            Trumpet
                                        </li>
                                        <li>
                                            Accordion
                                        </li>
                                        <li>
                                            Writing
                                        </li>
                                        <li>
                                            3D Modelling
                                        </li>
                                    </ul>
                                    Along with many more!
                                </div>
                            </div>
                        </SpanningImage>
                    </div>
                    <div>
                        <SpanningColor color="#8860D0">
                            <div className="homepage-header">
                                Projects
                            </div>
                            <div className="homepage-body">
                                <div className="section">
                                    Here are some of my favourite projects that I have worked on!
                                </div>
                                <CardGallery cards={Projects}>
                                </CardGallery>
                            </div>
                        </SpanningColor>
                    </div>
                </div> 
            </div>
        )
    }
}
export default HomePage;