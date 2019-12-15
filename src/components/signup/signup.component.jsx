import React, {useState} from "react";

import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button";
import './signup.styles.scss'
import { ReactComponent as AvatarLogo } from '../../assets/user.svg'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
const SignUp = () => {
 const [userCredentials, setUserCredentials] = useState({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
})

  const { displayName, email, password, confirmPassword } = userCredentials;

   const handleSubmit = async event =>{
        event.preventDefault();
        if(password !== confirmPassword){
          alert(`Passwords don't match!`)
          return;
        }

        try{
          const { user } = await auth.createUserWithEmailAndPassword(email, password)

          await createUserProfileDocument(user, {displayName})
        setUserCredentials({
          displayName:'',
          email:'',
          password:'',
          confirmPassword:'' })

        }catch(error){
          console.log(error);
        }
    }

  const handleChange = event =>{
        const { value, name } = event.target;

        setUserCredentials({...userCredentials, [name]: value})
    }


    return (
      <div className="signup">


        <div className="signup__container">
          <div className="signup__avatar">
            <AvatarLogo />
          </div>

          <div>
          
          </div>
          <form onSubmit = {handleSubmit} className="signup__form">
            <h2>Sign up!</h2>
            <FormInput 
                name="displayName" 
                type="text" 
                label="Username"
                value={displayName}
                handleChange={handleChange}
                id="displayName" 
                required />
            <FormInput 
                name="email" 
                type="text" 
                label="Email"
                value={email} 
                handleChange={handleChange}
                id="login" 
                required />
            <FormInput
              name="password"
              type="password"
              label="Password"
              value={password}
              handleChange={handleChange}
              id="pass"
              required
            />
            <FormInput
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              handleChange={handleChange}
              id="confirmPassword"
              required
            />

            <div className="signup__buttons">
            <div onClick={handleSubmit}>
            <CustomButton type="submit">SIGN UP</CustomButton>
            </div>
              
            </div>
          </form>
        </div>
      </div>
    );
  }

export default SignUp;
