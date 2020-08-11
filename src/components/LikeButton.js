import React from 'react';

class LikeButton extends React.Component {
  constructor(props){
    super(props)
    this.state = ({
    likes: 0
    });
  }

  addLike = () => {
    let newCount = this.state.likes + 1;
    this.setState({
      likes: newCount
    });
  };

  render() {
      return <button className ='like-comment-button' onClick={this.addLike} id={this.props.itemId} >Likes: {this.state.likes}</button>
    }
  }

  export default LikeButton;