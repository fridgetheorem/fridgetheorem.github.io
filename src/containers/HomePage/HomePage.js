import React, {Component} from 'react';
import classes from './HomePage.module.css';

import TextContainer from '../../components/TextContainers/TextContainer';

class HomePage extends Component{
    render(){
        return(
            <div className={classes.Main}>
                <div className={classes.Info}>
                <TextContainer></TextContainer>
                <TextContainer></TextContainer>
                <TextContainer></TextContainer>
                </div>
            </div>
        )
    }
}

export default HomePage;