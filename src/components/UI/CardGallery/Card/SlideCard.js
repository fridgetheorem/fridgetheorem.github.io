import React, {Component} from 'react';
import './Card.css';

class SlideCard extends Component{
    render(){
        return(
            <div className="slide-card"
            style={{
                height:this.props.height,
                width:this.props.width
            }}>
                <div className="slide-card-inner">
                    <div className="slide-card-front"
                    style={
                        {...this.props.cardFrontStyle}
                    }>
                        {this.props.children}
                    </div>
                    <div className="slide-card-back"
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

export default SlideCard;