import React from "react";
import SignUp from '../../components/signup/signup.component'
import './signup.styles.scss'

class SignUpPage extends React.Component {
  render() {
    return (
      <div className="signuppage">
      <div className="signuppage__container">
        <SignUp/>   
      </div>
      </div>
    );
  }
}

export default SignUpPage;
