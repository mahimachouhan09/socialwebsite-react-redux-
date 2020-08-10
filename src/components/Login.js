import React, { Component } from 'react';
import {connect} from 'react-redux';
import { login } from '../actions/index'
import Logincontainer from '../container/Logincontainer';

export class Login extends Component {
  constructor(props){
  super(props);
  this.state= ({ 
    email :'',
    postimg:'',
    caption:'' 
  })
 }

  onInputChange = (event) => this.setState({email: event.target.value})
  onPostimgChange = (event) => this.setState({postimg: event.target.value})
  onCaptionChange = (event) => this.setState({caption: event.target.value})
  email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

  aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined
  
  onFormSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email,this.state.postimg,this.state.caption)
    this.setState({
      email : '',
      postimg:'',
      caption:''
    })
  }

  render() {
    return (
      <div align= 'center'>
        <form className ='form' onSubmit = {this.onFormSubmit}>
          <label>Email</label>
          <input className = 'form-input' 
            type = 'email'
            placeholder = 'enter email'
            value = { this.state.email }
            onChange = { this.onInputChange}
            validate={this.email}
            warn={this.aol}
            required
            /><br />

            <label>post image</label>
            <input className = 'form-input' 
              type = 'file'
              value = { this.state.postimg }
              onChange = { this.onPostimgChange}
              required
            /><br />

           <label>caption</label>
           <input className = 'form-input' 
              type = 'text'
              placeholder = 'enter caption(optional)'
              value = { this.state.caption }
              onChange = { this.onCaptionChange}
            /><br />
          <br/><br />

          <button className= 'form-button' type= 'submit'>Post</button>
        </form>
        <Logincontainer />
      </div>
    )
  }
}

export default connect(null, { login })(Login)
