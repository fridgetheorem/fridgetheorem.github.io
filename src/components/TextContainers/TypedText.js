import { React, Component } from "react";


export class TypedText extends Component{
    cursorPos = 0;
    constructor(props){
        super(props);
        this.state = {
            currText:props.starterText||""
        }
        this.beginTyping();
    }
    // make it appear that the text is being typed

    beginTyping(){
        var numLetters = this.props.children.length; // word inside taken literally
        var delay = this.props.length;
        this.type(numLetters, delay); 
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async type(letters, length){
        if(this.cursorPos >= letters) {
            if(this.props.callback) this.props.callback(); // call the callback function
            return;
        }
        var newText = this.state.currText;
        if(this.props.children[this.cursorPos] === '~'){
            newText = this.state.currText.substring(0, this.cursorPos - 1);
            this.cursorPos++;
        }
        else{
            newText += this.props.children[this.cursorPos++];
        }
         
        await this.sleep(length)
        this.setState({
            currText:newText
        }, ()=> this.type(letters, length));
    }
        
    render(){
        return(
            <div className={this.props.classes}>
                {this.state.currText} 
            </div>
        )
    }
}