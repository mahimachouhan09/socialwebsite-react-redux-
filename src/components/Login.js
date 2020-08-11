import React, { Component } from 'react';
import {connect} from 'react-redux';
import { login } from '../actions/index'
import Logincontainer from '../container/Logincontainer';
import '../App.css';
// import { Redirect } from 'react-router'
// import { withRouter} from 'react-router-dom'

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
  handleEmailValidate = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

  // aol = value =>
  // value && /.+@aol\.com/.test(value) ?
  // 'Really? You still use AOL for your email?' : undefined
  
  onFormSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email,this.state.postimg,this.state.caption)
    // {this.props.history.push('/postfeed')}
    this.setState({
      email : '',
      postimg:'',
      caption:''
    })
    alert('scroll down for feed')
    // return <Redirect from = "/" to = "/postfeed/" />;
  }

  render() {
    return (
      <div className = 'login-div' align = 'center'>
        <form className ='login-div-form' onSubmit = {this.onFormSubmit}>
          <label>Email</label>
          <input className = 'form-input' 
            type = 'email'
            placeholder = 'enter email'
            value = { this.state.email }
            onChange = { this.onInputChange}
            validate={this.handleEmailValidate}
            // warn={this.aol}
            required
            /><br />

            <label className = 'form-input-postimg-label'>post pic</label>
            <input className = 'form-input-postimg' 
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
          <br/><br/>
          <button className= 'form-button' type= 'submit'
          >Post</button>
        </form><hr/>
        <Logincontainer />
      </div>
    )
  }
}

export default connect(null, { login })(Login)
