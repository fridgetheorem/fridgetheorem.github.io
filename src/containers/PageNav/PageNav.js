import React, { Component } from 'react'
import './PageNav.css';

import ReactGA from 'react-ga';

class PageNav extends Component{
    constructor(props){
        super(props);

        this.state={
            menuOpen:false
        }
        this.handleMenuToggle = this.handleMenuToggle.bind(this);
    }

    handleMenuToggle(){
        let newState = {...this.state}
        newState.menuOpen = !this.state.menuOpen;
        this.setState(newState);
    }

    goToHash(hash){
        window.location.hash = hash;
    }

    render() {
        return (
            <div>
                <div className="hamburger" 
                onClick={this.handleMenuToggle}>
                    <div /><div /><div />
                </div>
                {this.state.menuOpen? 
                <div className="menu">
                    <div
                    onClick={
                        ()=>{
                            this.handleMenuToggle()
                        }
                    } 
                    ><b>X</b> Close </div>
                    <div
                    onClick={
                        ()=>{
                            this.goToHash("About")
                            ReactGA.event({
                                type:"hash"
                            });
                        }
                    } 
                    >About Me</div>
                    <div
                    onClick={
                        ()=>{
                            this.goToHash("Projects")
                            ReactGA.event({
                                type:"hash"
                            });
                        }
                    } 
                    >Projects</div>
                    <div
                    onClick={
                        ()=>{
                            this.goToHash("Work")
                            ReactGA.event({
                                type:"hash"
                            });
                        }
                    } 
                    >Work</div>
                    <div
                    onClick={
                        ()=>{
                            this.goToHash("Awards")
                            ReactGA.event({
                                type:"hash"
                            });
                        }
                    } 
                    >Awards</div>
                    <div
                    onClick={
                        ()=>{
                            this.goToHash("Resume")
                            ReactGA.event({
                                type:"hash"
                            });
                        }
                    } 
                    >Resume</div>
                </div>
                :null}
            </div>
        )
    }
}

export default PageNav;

export const scrollDownButton = props =>{
    return(
        <div className="spanningButton bottom">
            <div className="down-arrow-animated">▼</div>
        </div>
    )
}