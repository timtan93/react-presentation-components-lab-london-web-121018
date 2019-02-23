// Code SimpleComponent Here
import React, { Component } from 'react' 

export default class SimpleComponent extends Component {

    state = {
        mood: 'happy',
    }

    handleClick = () => {
       const updatedMood =  this.state.mood === 'happy' ? 'sad' : 'happy'
       console.log(updatedMood)
       this.setState({
           mood: updatedMood
       })
    }

    render(){
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}