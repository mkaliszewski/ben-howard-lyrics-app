import React from "react";

import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button";
import './signup.styles.scss'
import { ReactComponent as AvatarLogo } from '../../assets/user.svg'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
class SignUp extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
          alert(`Passwords don't match!`)
          return;
        }

        try{
          const { user } = await auth.createUserWithEmailAndPassword(email, password)

          await createUserProfileDocument(user, {displayName})

          this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
          })

        }catch(error){
          console.log(error);
        }
    }

    handleChange = event =>{
        const { value, name } = event.target;

        this.setState({[name]: value})
    }

  render() {
    const { displayName, email, password, confirmPassword  } = this.state;

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
                name="displayName" 
                type="text" 
                label="Username"
                value={displayName}
                handleChange={this.handleChange}
                id="displayName" 
                required />
            <FormInput 
                name="email" 
                type="text" 
                label="Email"
                value={email} 
                handleChange={this.handleChange}
                id="login" 
                required />
            <FormInput
              name="password"
              type="password"
              label="Password"
              value={password}
              handleChange={this.handleChange}
              id="pass"
              required
            />
            <FormInput
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              handleChange={this.handleChange}
              id="confirmPassword"
              required
            />

            <div className="signup__buttons">
            <div onClick={this.handleSubmit}>
            <CustomButton type="submit">SIGN UP</CustomButton>
            </div>
              
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
