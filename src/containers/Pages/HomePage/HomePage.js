import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './HomePage.css';
import SpanningImage from '../../../components/UI/SpanningImage/SpanningImage';
import Parallax from '../../../components/UI/Parallax/Parallax';
import SpanningColor from '../../../components/UI/SpanningColor/SpanningColor';
import CardGallery from '../../../components/UI/CardGallery/CardGallery';
import Button from '../../../components/UI/Button/Button';
import {PROJECTS as Projects} from './Projects';
import { AWARDS } from './Awards';
import PageNav from '../../PageNav/PageNav';

class HomePage extends Component{
    render() {
        return (
            <div className="homepage">
                <PageNav></PageNav>
                <div className="bg-hue">
                </div> 
                <div className="overlay">
                    <div className="full-page">
                        <div className="homepage-title">
                            <div className="homepage-title-text">
                                Cameron Hadfield
                                <div className="title-rect-top"></div>
                                <div className="title-rect-side-left"></div>
                                <div className="title-rect-side-right"></div>
                                <div className="title-rect-bottom"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <SpanningImage src={"https://firebasestorage.googleapis.com/v0/b/personalwebsiteassets.appspot.com/o/images%2Flandscape_bg.png?alt=media&token=9544e1ee-5b96-449b-9f7e-5fea84f180b9"}
                        overlayStyle={{
                            backgroundColor:"#105716cc"
                        }} 
                        >
                            <a name="About" />
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
                        <a name="Projects" />
                        <SpanningColor color="#111111">
                            <div className="homepage-header">
                                Personal Projects
                            </div>
                            <div className="homepage-body">
                                <div className="section">
                                    Here are some of my favourite projects that I have worked on!
                                    Hover/tap to see more!
                                </div>
                                <CardGallery cards={Projects}>
                                </CardGallery>
                            </div>
                        </SpanningColor>
                    </div>
                    <div>
                        <a name="Work" />
                        <SpanningImage
                        src="https://firebasestorage.googleapis.com/v0/b/personalwebsiteassets.appspot.com/o/images%2FIMG_20190220_161428.jpg?alt=media&token=4163ae1a-9ed6-48be-a484-d481332864b8"
                        overlayStyle={{
                            backgroundColor:"#105716cc"
                        }}
                        >
                            <div className="homepage-header">
                                Work Experience
                            </div>
                            <div className="homepage-body">
                                <div className="section">
                                    <div className="project-title">
                                        Zehrs
                                    </div>
                                    <div>
                                        At Zehrs, I learned important customer service skills,
                                        as well as how to work with very quick deadlines
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="project-title">
                                        Bell and Howell
                                    </div>
                                    <div>
                                        At Bell and Howell, I worked on the team
                                        responsible for managing the factory oversight 
                                        software for production of
                                        mail related to US Census
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="project-title">
                                        Ctrl V Virtual Reality
                                    </div>
                                    <div>
                                        At Ctrl V I worked on many different projects.
                                        One of the main projects I worked on was refactoring our
                                        invoice generation system.
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="project-title"> Cam 360 
                                    </div> 
                                    <div className="project-body">
                                        Though I never got a paid contract through Cam360,
                                        I did do some pro bono work, where I made 360 tours
                                        of my high school as well as the schoolboard office.
                                        This work taught me good entrepreneurial skills,
                                        and ways to motivate myself.
                                    </div>
                                </div>
                            </div>
                            <a name="Awards" />
                            <div className="homepage-header">
                                Awards
                            </div>
                            <div className="homepage-body">
                                I hate talking myself up, luckily some
                                other people have done it for me.
                                <CardGallery cards={AWARDS}>
                                </CardGallery>
                            </div>
                        </SpanningImage>
                    </div>
                    <div>
                        <a name="Resume" />
                        <SpanningColor color="#111111">
                            <div className="homepage-header">
                                Resume
                            </div>
                            <div className="homepage-body">
                                <div className="section">
                                    I hope you like what you saw on my website,
                                    please reach out if you'd like to chat!
                                </div>
                                <div>
                                    <div className="section modified-width">
                                        <Button
                                        clicked={
                                            () => 
                                            {
                                                window.open("mailto:cameron.hadfield@gmail.com");
                                                ReactGA.event({
                                                    category: "Email",
                                                    action: "User pressed the email button"
                                                })
                                            }
                                        } 
                                        >
                                            Send me an email <span role="img">📧</span>   
                                        </Button>     
                                    </div>
                                    <div className="section modified-width">
                                        <Button
                                        clicked={
                                            () => 
                                            {
                                                window.open("https://firebasestorage.googleapis.com/v0/b/personalwebsiteassets.appspot.com/o/documents%2FCameronHResumeF20.pdf?alt=media&token=ce092f54-80c3-4af1-ad59-f83f104ec6d5");
                                                ReactGA.event({
                                                    category: "Download Resume",
                                                    action: "User pressed the download resume button"
                                                })
                                            }
                                        } 
                                        >
                                            Check out/download my Resume <span role="img">📜</span>
                                        </Button>     
                                    </div>
                                    <div className="section modified-width">
                                        <Button
                                        clicked={
                                            () => 
                                            {
                                                window.open("mailto:cameron.hadfield@gmail.com?subject=Job%20Offer");
                                                ReactGA.event({
                                                    category: "Email",
                                                    action: "User pressed the send me a job offer button"
                                                })
                                            }
                                        } 
                                        >
                                            Offer me a job <span role="img">🎉</span>
                                        </Button>     
                                    </div>
                                </div>
                            </div>
                            <div classname="section">
                                <div className="flex links">
                                    <a href="https://twitter.com/3204Dev">
                                        Twitter
                                    </a>
                                    <a href="https://github.com/CameronHadfield">
                                        Github
                                    </a>
                                    <a href="https://cdawgvr.itch.io/">
                                        itch.io
                                    </a>
                                    <a href="https://gamejolt.com/@Cdawgvr">
                                        Gamejolt
                                    </a>
                                </div>
                            </div>
                        </SpanningColor>
                    </div>
                </div> 
            </div>
        )
    }
}
export default HomePage;