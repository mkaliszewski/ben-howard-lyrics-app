import React from "react";
import SignUp from '../../components/signup/signup.component'
import './signup.styles.scss'

class SignUpPage extends React.Component {
  render() {
    return (
      <div className="sign-up-page">
      <div className="sign-up-page__div">
      <h1>Hi, join us <span className="signin__span-color">today</span>!</h1>
      </div>
        <SignUp/>   

      </div>
    );
  }
}

export default SignUpPage;
