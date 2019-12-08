import React from "react";
import { Link } from "react-router-dom";
import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button";
import './signup.styles.scss'
import { ReactComponent as AvatarLogo } from '../../assets/user.svg'
class SignUp extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            username:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();

        this.setState({email:"", password:""})
    }

    handleChange = event =>{
        const { value, name } = event.target;

        this.setState({[name]: value})
    }

  render() {
console.log(this.state)
    const { username, email, password, confirmPassword  } = this.state;
    return (
      <div className="signup">


        <div className="signup__container">
          <div className="signup__avatar">
            <AvatarLogo />
          </div>

          <div>
          
          </div>
          <form onSubmit = {this.handleSubmit} className="signup__form">
            <h2>Sign up!</h2>
            <FormInput 
                name="username" 
                type="text" 
                label="Username"
                value={username} 
                onChange={this.handleChange}
                id="username" 
                required />
            <FormInput 
                name="email" 
                type="text" 
                label="Email"
                value={email} 
                onChange={this.handleChange}
                id="login" 
                required />
            <FormInput
              name="password"
              type="password"
              label="Password"
              value={password}
              onChange={this.handleChange}
              id="pass"
              required
            />
            <FormInput
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={this.handleChange}
              id="confirmPassword"
              required
            />

            <div className="signup__buttons">
              <CustomButton type="submit">SIGN UP</CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
