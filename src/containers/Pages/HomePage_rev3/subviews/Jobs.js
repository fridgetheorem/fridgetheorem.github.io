import {Component} from "react";
import './subview.css';
import { TypedText } from "../../../../components/TextContainers/TypedText";
import CardGallery from "../../../../components/UI/CardGallery/CardGallery";
import {Card} from "../../../../components/UI/CardGallery/Card/Card";
export class Jobs extends Component{
    constructor(props){
        super(props);
        this.state= {
            animStep:this.animationSteps.jobs
        };
    }
    animationSteps={
        comment:1,
        less:2,
        error:3,
        resumegen:4,
        jobs: 5
    } 
    steppedAnimation(step, override = false){
        if(this.state.animStep > step && !override) return;
        this.setState({ animStep:step });
    }
    render(){
        return(
        <div className="about-container comment-text">
            {this.state.animStep >= 1?<TypedText callback={()=>this.steppedAnimation(2)} starterText="cameron@Experience> " length="30">## Here you'll find my previous work experience</TypedText>:null}
            {this.state.animStep >= 2?<TypedText callback={()=>this.steppedAnimation(3)} starterText="cameron@Experience> " length="60">less resume</TypedText>:null}
            {this.state.animStep >= 3?<TypedText callback={()=>this.steppedAnimation(4)} starterText="Error: " length="0">File not found</TypedText>:null}
            {this.state.animStep >= 4?<TypedText callback={()=>this.steppedAnimation(5)} starterText="cameron@Experience> " length="70">./resumegen -W22 | less</TypedText>:null}
            {this.state.animStep >= 5?
                <div className="jobs-container">
                    <h3 style={{textAlign:"center"}}> In chronological order</h3>
                    <CardGallery>
                        <Card height="500px" width="400px" cardFrontStyle={{color: "white", boxShadow:"inset 0 0 0 7px #22222244", backgroundColor:"#3DABEC"}}
                        cardBackStyle={{background: "linear-gradient(0deg, rgba(40,40,40,1) 0%, rgba(255,255,255,0) 100%)"}}
                        cardBack={(
                            <div>
                                <h4>Waterloo</h4>
                                This was my first co-op, and I really appreciated the amount of freedom that my manager gave me.
                                It was nice to work on projects that weren't even just backlog, but still in planning stages
                            </div>
                        )}>
                            <h3> Bell and Howell </h3>
                            <ul className="lazy-list" >
                                <li>Worked on scripts for the U.S. Census</li>
                                <li>Began porting old code to Android with Xamarin</li>
                                <li>Provided installation consultation to people in charge of testing census production facilities</li>
                            </ul>

                        </Card>
                        <Card height="500px" width="400px" cardFrontStyle={{color: "white", boxShadow:"inset 0 0 0 7px #22222244", backgroundColor:"#2B79A8"}}
                        cardBackStyle={{background: "linear-gradient(0deg, rgba(40,40,40,1) 0%, rgba(255,255,255,0) 100%)"}}
                        cardBack={(
                            <div>
                                <h4>Waterloo</h4>
                                CtrlV was an interesting experience, because I got to work on almost everything with my boss.
                                The term was laid-back, but that gave me a chance to do some stuff that wasn't really in scope
                            </div>
                        )}>
                            <h3> CtrlV Virtual Reality </h3>
                            <ul className="lazy-list" >
                                <li>Worked with manager closely to deliver features for franchisees</li>
                                <li>Rebuilt in-house invoicing software from scratch</li>
                                <li>Helped create an interface for employees to change page content dynamically without the need for code</li>
                            </ul>

                        </Card> 
                        <Card height="500px" width="400px" cardFrontStyle={{color: "white", boxShadow:"inset 0 0 0 7px #22222244", backgroundColor:"#D13A14"}}
                        cardBackStyle={{background: "linear-gradient(0deg, rgba(40,40,40,1) 0%, rgba(255,255,255,0) 100%)"}}
                        cardBack={(
                            <div>
                                <h4>Remote (Mississauga)</h4>
                                BDO was my first work term with a lot of people. I worked closely with 2 other co-ops, which was exciting for me. 
                                I worked a lot of overtime, and it made me realize that balance is important
                            </div>
                        )}>
                            <h3> BDO Canada </h3>
                            <ul className="lazy-list" >
                                <li>Developed an updated user dashboard to track productivity</li>
                                <li>Worked within the deadlines of clients to deliver features</li>
                                <li>Had to learn a JavaScript graphing library inside and out in order to create a custom solution</li>
                            </ul>

                        </Card>
                        <Card height="500px" width="400px" cardFrontStyle={{color: "white", boxShadow:"inset 0 0 0 7px #22222244", backgroundColor:"#144361"}}
                        cardBackStyle={{background: "linear-gradient(0deg, rgba(40,40,40,1) 0%, rgba(255,255,255,0) 100%)"}}
                        cardBack={(
                            <div>
                                <h4>Remote (Toronto)</h4>
                                Imagine Communications was my most recent term. 
                                I learned a lot about how television is produced, but would have loved a chance to get closer to the hardware.
                            </div>
                        )}>
                            <h3> Imagine Communications </h3>
                            <ul className="lazy-list" >
                                <li>Created new UI features for routing data, audio, and video feeds across levels</li>
                                <li>Learned the MVVM design pattern</li>
                                <li>Worked with other teams to keep functionality across applications</li>
                            </ul>

                        </Card>
                    </CardGallery>
                </div>
    :null}
        </div>
        )
    }
}