import React, {Component} from 'react';
import classes from './HomePage.module.css';

import TextContainer from '../../components/TextContainers/TextContainer';
import Parallax from '../../components/UI/Parallax/Parallax';
import Waterloo1 from '../../assets/images/Scenery/Waterloo1.jpg';

import '../../stylesheets/generalstyles.css';

class HomePage extends Component{
    render(){
        return(
            <div className={classes.Main}>
                <Parallax
                height="500px"
                backgroundImage={`url(${Waterloo1})`}>
                    <div className="span-width medium-padding align-center">
                        <div className="header-wrapper">
                            <p className="header">My name is Cameron Hadfield</p>
                        </div>
                        <div className="body-wrapper">
                            <p className="body">Myy name is chef</p>
                        </div>
                    </div>
                </Parallax>
            </div>
        )
    }
}

export default HomePage;