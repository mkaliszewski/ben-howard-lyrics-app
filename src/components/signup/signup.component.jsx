import React, { useState } from "react";

import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button";
import "./signup.styles.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    errorMessage:""
  });


  const { displayName, email, password, confirmPassword, errorMessage } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert(`Passwords don't match!`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      setUserCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        errorMessage:""
      });
    } catch (error) {
      setUserCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        errorMessage:error.message
      })
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="signup__form">
        <h2>Sign up!</h2>
        <FormInput
          name="displayName"
          type="text"
          label="Username"
          value={displayName}
          handleChange={handleChange}
          id="displayName"
          required
        />
        <FormInput
          name="email"
          type="text"
          label="Email"
          value={email}
          handleChange={handleChange}
          id="login"
          required
        />
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
      {
        errorMessage ?
        <h4>{`Whooops... ${errorMessage}`}</h4>
        :
        null
      }
        <div className="signup__buttons">
          <div >
            <CustomButton onClick={handleSubmit} type="submit">SIGN UP</CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
