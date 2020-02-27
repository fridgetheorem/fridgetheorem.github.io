import React, {Component} from 'react';
import classes from './HomePage.module.css';

import TextContainer from '../../components/TextContainers/TextContainer';
import Parallax from '../../components/UI/Parallax/Parallax';
import Waterloo1 from '../../assets/images/Scenery/Waterloo1.jpg';


import '../../stylesheets/generalstyles.css';
import CardList from '../CardView/CardList';
import Card from '../CardView/Card';

class HomePage extends Component{
    render(){
        return(
            <div className={classes.Main}>
                <div className="border-top-and-bottom">
                    <Parallax
                    height="300px"
                    backgroundImage={`${Waterloo1}`}>
                        <div className="span-width medium-padding align-center">
                            <div className="header-wrapper">
                                <p className="header title-background">My name is Cameron Hadfield, and I like to see life in a different way</p>
                            </div>
                        </div>
                    </Parallax>
                    <Parallax
                    height="50em">
                        <div className="span-width medium-padding align-center border-top-and-bottom"
                        >
                            <div className="header-dark bold-text">
                                I am doing so well, thank you for asking
                            </div>
                            <div className="body-dark large-padding">
                                I enjoy hanging around and doing my thing, just really broing out you know?
                            </div>
                        </div>
                    </Parallax>
                </div>
            </div>
        )
    }
}

export default HomePage;