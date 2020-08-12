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
    caption:'',
    // imgarray : []
  })
 }

  onInputChange = (event) => this.setState({email: event.target.value})

  // onPostimgChange = (event) =>{
  //  this.setState({imgarray: event.target.files[0]})
  //   console.log(this.state.imgarray)
  // }

  onPostimgChange = (event) => { this.setState({postimg: event.target.value}) }

  onCaptionChange = (event) => this.setState({caption: event.target.value})
  
  validateForm = () => {
    if (/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(this.state.email)){
      return true
    }
    return false
  }


  onFormSubmit = event => {
    event.preventDefault();
    const isValid = this.validateForm()
    if(isValid){
      this.props.login(this.state.email,this.state.postimg,this.state.caption)
      // {this.props.history.push('/postfeed')}
      this.setState({
        email : '',
        postimg:'',
        caption:'',
        // imgarray :[]
      })
    alert('scroll down for feed')
    // return <Redirect from = "/" to = "/postfeed/" />;
  }
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
            required
          /><br />

          <label className = 'form-input-postimg-label'>post pic</label>
          <input className = 'form-input-postimg' 
            type = 'file'
            value = { this.state.postimg }
            // onChange = {(event) => this.onPostimgChange(file)}
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
          <button className= 'form-button' type= 'submit'>Post</button>
        </form><hr/>
        <Logincontainer />
      </div>
    )
  }
}

export default connect(null, { login })(Login)
