import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './HomePage.css';
import { NavBar } from './TopNav';
import { About } from './subviews/About';
import { Projects } from './subviews/Projects';
import { Jobs } from './subviews/Jobs';
import { views } from './subviews/enums';

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {currpage:0}
        
        this.goToPage = this.goToPage.bind(this);
    }
    render() {
        return (
            <div className="homepage">
                {this.state.currpage !== 0 ? (<NavBar goTo={this.goToPage}></NavBar>) : (<div/>)}
                <div className="full-page">
                    { this.getContent() }
                </div>
            </div>
        )
    }
    getContent(){
        var out;
        switch(this.state.currpage){
            case 0:
                out = (
                    <div>
                        <div className="homepage-title">
                            <div className="homepage-title-text">
                            </div>
                        </div>
                        <div className="pagelinks">
                            <div onClick={()=>{this.goToPage(views.Projects)}}>Projects</div>
                            <div onClick={()=>{this.goToPage(views.Jobs)}}>Previous experience</div>
                            <div onClick={()=>{this.goToPage(views.About)}}>About</div>
                        </div>
                        <div className="socials">
                            Social Links
                            <div className="sociallinks">
                                <a href="https://github.com/CameronHadfield"> Github </a> 
                                <a href="https://www.linkedin.com/in/cameronhadfield/"> Linkedin </a> 
                            </div>
                        </div>
                    </div>
                )
                break;
            case 1:
                out = <About></About>;
                break;
            case 2:
                out = <Projects></Projects>;
                break;
            case 3:
                out = <Jobs></Jobs>;
                break;
            default:
                break;
        }
        return out;
    }
    goToPage(page){
        ReactGA.event({
            category: "Navigation",
            action: "User Navigated to a new view"
        });
        this.setState({currpage:page});
    }
}
export default HomePage;