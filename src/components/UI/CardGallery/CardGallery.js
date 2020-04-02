import React, { Component } from 'react';
import Card from './Card/Card';
import './CardGallery.css';

class CardGallery extends Component {
    getRenderedCards = () =>{
        const renderedCards = this.props.cards.map(elem =>{
            return(
                <Card 
                    cardFrontStyle={elem.cardFrontStyle} 
                    cardBackStyle={elem.cardBackStyle} 
                    cardBack={elem.backContent}
                    width={elem.width}
                    height={elem.height}
                >
                    {elem.frontContent}
                </Card>
            )
        });
        return renderedCards
    }
    render() {
        return (
            <div className="card-gallery">
                {this.getRenderedCards()}
            </div>
        )
    }
}

export default CardGallery;