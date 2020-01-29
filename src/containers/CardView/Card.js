import React, {Component} from 'react';
import classes from './Card.module.css';

class Card extends Component{

    render(){
        return(
            <div>
                <div className={classes.Title}>
                    {this.props.title}
                </div>
                <div className={classes.Body}>
                    {this.props.children}
                </div>
                <div className={classes.Footer}>
                    {this.props.footer}
                </div>
            </div>
        );
    }
}

export default Card;