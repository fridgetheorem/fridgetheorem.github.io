import React, {Component} from 'react';
import './Card.css';

export class Card extends Component{

    render(){
        return(
            <div className="flip-card"
            style={{
                height:this.props.height,
                width:this.props.width,
                marginLeft:"10px",
                marginRight:"10px",
            }}>
                <div className="flip-card-inner">
                    <div className="flip-card-front"
                    style={
                        {...this.props.cardFrontStyle}
                    }>
                        {this.props.children}
                    </div>
                    <div className="flip-card-back"
                    style={
                        {...this.props.cardBackStyle}
                    }>
                        {this.props.cardBack}
                    </div>
                </div>
            </div>
        );
    }
}