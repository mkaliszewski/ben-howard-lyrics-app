import React from "react";
import { Link } from "react-router-dom";
import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button";
import "./signin.styles.scss";
import { ReactComponent as AvatarLogo } from '../../assets/user.svg'
class SignIn extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
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
    const { email, password } = this.state;
    return (
      <div className="signin">


        <div className="signin__container">
          <div className="signin__avatar">
            <AvatarLogo />
          </div>

          <div>
          
          </div>
          <form onSubmit = {this.handleSubmit} className="signin__form">
            <h2>Sign in!</h2>
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
            <span className="signin__span"><p>Don't have an account?</p><Link className="signin__link" to="/signup">SIGN UP</Link></span>

            <div className="signin__buttons">
              <CustomButton type="submit">SIGN IN</CustomButton>
              <h3>OR SIGN IN WITH</h3>
              <div className="signin__buttons-options">
              <CustomButton buttonClass="button-google">GOOGLE</CustomButton>
              <CustomButton buttonClass="button-facebook">FACEBOOK</CustomButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
