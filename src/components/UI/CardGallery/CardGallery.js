import React, { Component } from 'react';
import SlideCard from './Card/SlideCard';
import './CardGallery.css';

class CardGallery extends Component {
    getRenderedCards = () =>{
        if(!this.props.cards) return;
        const renderedCards = this.props.cards.map(elem =>{
            return(
                <div className="flex-item">
                    <SlideCard 
                        cardFrontStyle={elem.cardFrontStyle} 
                        cardBackStyle={elem.cardBackStyle} 
                        cardBack={elem.backContent}
                        width={elem.width}
                        height={elem.height}
                    >
                        {elem.frontContent}
                    </SlideCard>
                </div>
            )
        });
        return renderedCards
    }
    render() {
        return (
            <div className="card-gallery">
                {this.props.cards?this.getRenderedCards():this.props.children}
            </div>
        )
    }
}

export default CardGallery;