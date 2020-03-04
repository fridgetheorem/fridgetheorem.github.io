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
                <div>
                    <div style={{
                        backgroundImage:`url(https://firebasestorage.googleapis.com/v0/b/personalwebsiteassets.appspot.com/o/images%2Flandscape_bg.png?alt=media&token=9544e1ee-5b96-449b-9f7e-5fea84f180b9)`,
                        filter:"grayscale(100%)"
                    }}
                    className={classes.BgImg}>
                    </div>
                    <div style={{
                        backgroundColor:"#ddddddcc",
                        boxShadow:"inset 0px 0px 10px 10px #ffffff"
                    }}
                    className={classes.BgHue}>
                    </div>
                    <div className={classes.ContentPane}>
                        TextContainers  test  test
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;