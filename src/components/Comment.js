import React, { Component } from 'react'
import { connect }   from 'react-redux';
import '../App.css';
import { addComment } from '../actions/index'
import CommentContainer from '../container/CommentContainer';

export class Comment extends Component {
  constructor(props){
    super(props);
    this.state = ({
      email : '',
      comment :''
    })
  }

  onEmailChange = (event) =>{ this.setState({ email: event.target.value })}
  onCommentChange = (event) => { this.setState({ comment: event.target.value })}

  validateForm = () => {
    if (/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(this.state.email)){
      return true
    }
    return alert('Enter your valid email Id')
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    const isValid = this.validateForm()
    if(isValid){
    this.props.addComment(this.state.email, this.state.comment)
    this.setState({
      email: '',
      comment :'',
    })
  }
  }
  
  render() {
    return (
      <div>
          <form className ='form-comment' onSubmit={this.handleSubmit} >
            <label className ='form-comment-label' >comment on post :</label>
            <textarea className ='form-comment-textarea'
              placeholder ='comment'
              value = {this.state.comment}
              onChange = {this.onCommentChange}
            />
            <label className ='form-comment-label'>Email</label>
            <input className ='form-comment-input'
              type = 'text'
              placeholder = 'enter email'
              value = { this.state.email }
              onChange = { this.onEmailChange}
           /><br />
            <button className ='like-comment-button' type ='submit'>Comment</button>
            <CommentContainer />
          </form>
      </div>
    )
  }
}

export default connect(null, { addComment })(Comment)
