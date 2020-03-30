import React, { Component } from 'react';
import './HomePage.css';
import SpanningImage from '../../../components/UI/SpanningImage/SpanningImage';

class HomePage extends Component{
    render() {
        return (
            <div className="homepage">
                <div className="bg-hue">
                </div> 
                <div className="overlay">
                    <div className="full-page">
                        <div className="homepage-title">
                            Cameron Hadfield
                        </div>
                    </div>
                    <div>
                        <SpanningImage src={"https://firebasestorage.googleapis.com/v0/b/personalwebsiteassets.appspot.com/o/images%2Flandscape_bg.png?alt=media&token=9544e1ee-5b96-449b-9f7e-5fea84f180b9"}
                        overlayStyle={{
                            backgroundColor:"#15244999"
                        }} 
                        ></SpanningImage>
                    </div>
                    <div>
                        <div className="homepage-header">
                            About Me
                        </div>
                        <div className="homepage-body">
                            <div className="section">
                                My name is Cameron Hadfield and I currently attend the University of Waterloo for Computer Science
                            </div>
                            <div className="section">
                                I have been programming since I was 10 years old, starting with a BASIC interpreter.
                                When my dad introduced me to programming, I had only ever played video games, and always wanted to learn how to make my own.
                                I decided to try my hand at a text-based adventure game in BASIC.
                            </div>
                            <div className="section">
                                I tried my best, but eventually resolved to building chat bots
                                that would respond with canned messages instead.
                                I had no idea of the scope of making a game.
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
export default HomePage;