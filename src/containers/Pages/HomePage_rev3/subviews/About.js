import './subview.css';
import { Component } from "react";

import { TypedText } from "../../../../components/TextContainers/TypedText";
import CardGallery from "../../../../components/UI/CardGallery/CardGallery";
import SlideCard from "../../../../components/UI/CardGallery/Card/SlideCard";
import Button from "../../../../components/UI/Button/Button";
import ReactGA from 'react-ga';

export class About extends Component{
    constructor(props){
        super(props);
        this.state= {
            animStep:this.animationSteps.projects
        }
    }
    animationSteps={
        comment:1,
        echo:2,
        projects:3
    }
    steppedAnimation(step, override = false){
        if(this.state.animStep > step && !override) return;
        this.setState({ animStep:step });
    }
    render(){
        return(
            <div className="about-container">
                {this.state.animStep >= 1?<TypedText callback={()=>{this.steppedAnimation(2)}} classes="comment-text" starterText="cameron@About> " length="30">{"## This page has all sorts of stuff about me       "}</TypedText> : null}
                {this.state.animStep >= 2?<TypedText callback={()=>{this.steppedAnimation(3)}} classes="comment-text" starterText="cameron@About> " length="60">{"less about"}</TypedText> : null}
                {this.state.animStep >= 3? 
                    <div>
                        <div class="about-details" style={{marginBottom:"5px"}}>
                                <CardGallery>
                                    <SlideCard cardFrontStyle={{color:"white", backgroundColor:"#902519", boxShadow:"inset 0px 0px 0px 7px #6C1A11"}}
                                    cardBackStyle={{fontSize:"1.2em", backgroundColor:"#5D695F"}}
                                    cardBack={(
                                            <div>
                                                I like to work on computers whenever I get the chance. 
                                                Whether it is picking up projects from friends or just working on my home servers, 
                                                I love working with computer hardware!
                                            </div>
                                            )}>
                                        <h1>I like computers!</h1>
                                        <div>I have had an active interest in computers from a very young age, and have been enjoying learning how to work with them for just as long</div>
                                    </SlideCard>
                                    <SlideCard cardFrontStyle={{color:"white", backgroundColor:"#2399BC", boxShadow:"inset 0px 0px 0px 7px #216E85"}}
                                    cardBackStyle={{fontSize:"1.2em", backgroundColor:"#3C987F"}}
                                    cardBack={(
                                            <div>
                                                <h4>
                                                    Some of my favourites:
                                                </h4>
                                                <ul style={{textAlign:"left"}}>
                                                    <li>Red Dead Redemption 2</li>
                                                    <li>Doom Eternal</li>
                                                    <li>Risk of Rain</li>
                                                </ul>
                                            </div>
                                            )}>
                                        <h1>I like games!</h1>
                                        <div>I have been playing video games since I was young, and have not stopped since. It has always been one of my dreams to finish my own. <b>Hover</b> to see some of my top picks.</div>
                                    </SlideCard>
                                    <SlideCard cardFrontStyle={{color:"white", backgroundColor:"#A016CA", boxShadow:"inset 0px 0px 0px 7px #72148E"}}
                                    cardBackStyle={{fontSize:"1em", backgroundColor:"#D5A3EB"}}
                                    cardBack={(
                                            <div>
                                                Some of my favourite projects I have worked on or researched recently are:
                                                <ul style={{textAlign:"left", fontSize:"0.9em"}}>
                                                    <li> Modifying a 4 pin DIN keyboard (~1985) to use a USB connector</li>
                                                    <li> Using bananas and some <a href="https://makeymakey.com/">makey makey boards</a> to build a full keyboard out of bananas</li>
                                                    <li> Custom webcam and effects preprocessor with Raspberry Pi</li>
                                                </ul>
                                            </div>
                                            )}>
                                        <h2>I love weird projects!</h2>
                                        <div>I've always had a fascination with doing weird projects with technology. Unfortunately, I don't always have the money or knowledge to go ahead with all of my ideas</div>
                                    </SlideCard>
                                    <SlideCard cardFrontStyle={{color:"white", backgroundColor:"#6007D8", boxShadow:"inset 0px 0px 0px 7px #46108D"}}
                                    cardBackStyle={{fontSize:"1.1em", backgroundColor:"#4E4B77"}}
                                    cardBack={(
                                            <div>
                                                I use a triple monitor setup, with additional lighting that allows me to carefully tune my front lighting, as well as using a boom mounted microphone.
                                                I have all audio routed through Voicemeeter, which I use for stream audio management
                                            </div>
                                            )}>
                                        <h1>I like streaming!</h1>
                                        <div>Over the past year, I have been trying to develop a setup for live streaming that works naturally for me</div>
                                    </SlideCard>
                                </CardGallery>
                        </div>
                        <div style={{textAlign:"center", color:"white"}}>
                            <h1> Please click one of these if you'd like to get in contact with me!</h1>
                            <div style={{fontSize:"1.3em"}}>
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
                                        Send me an email <span role="img" aria-label="email">📧</span>   
                                    </Button>     
                                </div>
                                <div className="section modified-width">
                                    <Button
                                    clicked={
                                        () => 
                                        {
                                            window.open("https://firebasestorage.googleapis.com/v0/b/personalwebsiteassets.appspot.com/o/documents%2FCameronHResumev2_8_1.pdf?alt=media&token=e8f953be-f226-4c27-a07d-bc015d3b2530");
                                            ReactGA.event({
                                                category: "Download Resume",
                                                action: "User pressed the download resume button"
                                            })
                                        }
                                    } 
                                    >
                                        Check out/download my Resume <span role="img" aria-label="resume">📜</span>
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
                                        Offer me a job <span role="img" aria-label="joboffer">🎉</span>
                                    </Button>     
                                </div>
                                <div className="section modified-width">
                                    <Button
                                    clicked={
                                        () => 
                                        {
                                            window.open("mailto:cameron.hadfield@gmail.com?subject=Collaboration%20Opportunity");
                                            ReactGA.event({
                                                category: "Email",
                                                action: "User pressed the invite button"
                                            })
                                        }
                                    } 
                                    >
                                        Message me about a project! <span role="img" aria-label="project">⌨</span>
                                    </Button>     
                                </div>
                            </div>

                        </div>
                    </div> :null}
            </div>
        )
    }
}