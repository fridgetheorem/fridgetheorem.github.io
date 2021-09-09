import {Component} from 'react';
import { TypedText } from '../../../../components/TextContainers/TypedText';
import Button from '../../../../components/UI/Button/Button';
export class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    openURL(url){
        window.open(url); 
    }
    render(){
        return(
        <div className="about-container">
            <div class="comment-text">
                <TypedText starterText="cameron@Projects> " length="20">## Here is where you will find my list of projects. I am hoping to keep update this every now and again</TypedText>
                <TypedText starterText="cameron@Projects> " length="40">less projects</TypedText>
            </div>
            <div class="projects-container">
                <div>
                    <h3>TwitchBot</h3> 
                    <div>This is my chat moderating bot for Twitch</div>
                    <div>Accessed through CLI</div>
                    <br/>
                    <Button clicked={()=>this.openURL("https://github.com/CameronHadfield/twitchbot")}> Take me there! </Button>
                </div>
                <div>
                    <h3>cppconsole</h3> 
                    <div>This is a little console app that I developed while on a trip recently</div>
                    <div>Again, accessed through CLI</div>
                    <br/>
                    <Button clicked={()=>this.openURL("https://github.com/CameronHadfield/cppconsole")}> Sounds cool!</Button>
                </div>
                <div>
                    <h3>Github Pages</h3> 
                    <div>This is the website you're on!</div>
                    <div>It makes more sense to have it fully open source, for anyone interested</div>
                    <br/>
                    <Button clicked={()=>this.openURL("https://github.com/CameronHadfield/cameronhadfield.github.io")}> Let me see! </Button>
                </div>
                <div>
                    <h3>ToTheBeatVR</h3> 
                    <div>A game I worked on in highschool.</div>
                    <div>A VR rhythm game that featured realtime track generation</div>
                    <br/>
                    <Button clicked={()=>this.openURL("https://cdawgvr.itch.io/to-the-beat-vr")}> *Drum sounds* </Button>
                </div>
                <div>
                    <h3>Instinct</h3> 
                    <div>No code to speak of, sadly.</div>
                    <div>This game was actually based on a podcast I wrote and produced</div>
                    <br/>
                    <Button clicked={()=>this.openURL("https://cdawgvr.itch.io/to-the-beat-vr")}> Spooky! </Button>
                </div>
            </div>
        </div>);
    }
}