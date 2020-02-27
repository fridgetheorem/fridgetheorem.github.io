import React, { Component } from 'react';
import classes from './NavigationElem.module.css';
import {Redirect} from 'react-router-dom';

class NavigationElem extends Component{
    state = {
        redirect: false,
        href: this.props.href
    }
    render(){
        const redirect = this.state.redirect;
        if(redirect){
            this.setState({redirect:false});
        }
        return(<div>
                {redirect?
                <Redirect to={this.state.href}/>:null}
                <div className={classes.NavigationElem}
                    onClick={() => this.setState({redirect: true})}>
                    <p>{this.props.children}</p>
                </div>
            </div>
        );
    }
}

export default NavigationElem;