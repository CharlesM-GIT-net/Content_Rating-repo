
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super(); 
    this.state = {
      likes: 0,
      dislikes: 0,
      handleLike:() => {
        this.setState((prevState)=>({
          likes: prevState.likes + 1
        }));
      },

      handleDislike:()=> {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1
        }))
      }
    };
  }
  render() {
    return (
     <>
     <div className='content-rating'>
      <p>
        Latest <i>Unreal Engine 5</i> has been revolutionary in Gaming Industries.
        With some popular games that has been using this engine; <b>Tekken 8, Black Myth:
        Wukong, and Layers of Fear</b>. Do you agree? </p>
     </div>

     <div className='rating-buttons'>
      <button className='like-button' onClick={this.state.handleLike}>
        Like ({this.state.likes})
      </button>
      <button className='dislike-button'onClick={this.state.handleDislike}>
        Dislike ({this.state.dislikes})
      </button>
     </div>
     </>
    );
  }
}

export default ContentRating;
