import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button";
import {
  auth,
  signInWithGoogle,
  signInWithFacebook
} from "../../firebase/firebase.utils";
import "./signin.styles.scss";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="signin">
      <form onSubmit={handleSubmit} className="signin__form">
        <h2>Sign in!</h2>
        <FormInput
          name="email"
          type="text"
          label="Email"
          value={email}
          onChange={handleChange}
          id="login"
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={handleChange}
          id="pass"
          required
        />
        <span className="signin__span">
          <p>Don't have an account?</p>
          <Link className="signin__link" to="/signup">
            SIGN UP
          </Link>
        </span>
        <div className="signin__buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <h3>OR SIGN IN WITH</h3>
          <div className="signin__container"><div className="signin__buttons-options">
          <div onClick={signInWithGoogle}>
            <CustomButton buttonClass="button-google">GOOGLE</CustomButton>
          </div>
          <div onClick={signInWithFacebook}>
            <CustomButton buttonClass="button-facebook">
              FACEBOOK
            </CustomButton>
          </div>
        </div></div>

          
        </div>
      </form>
    </div>
  );
};

export default SignIn;
