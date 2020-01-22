import React, {Component} from 'react';
import classes from './HomePage.module.css';

import Card from '../CardView/Card';

class HomePage extends Component{
    render(){
        return(
            <div className={classes.HomePage}>
                <Card title="Testing" footer="what he said">
                    Dolor Ipsum
                </Card>
                <Card title="Testing" footer="what he said">
                    Dolor Ipsum
                </Card>
            </div>
        )
    }
}

export default HomePage;