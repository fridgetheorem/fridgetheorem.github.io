import React, { Component } from 'react';
import classes from './CardList.module.css';

class CardList extends Component{


    render(){
        return(
            <div className={classes.CardList}>
                {this.props.children}
            </div>
        )
    }
}

export default CardList;