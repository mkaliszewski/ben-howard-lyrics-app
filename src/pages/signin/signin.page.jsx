import React from "react";
import SignIn from '../../components/signin/signin.component'
import "./signin.styles.scss";

class SignInPage extends React.Component {
  render() {
    return (
      <div className="sign-in-page">
      <div className="sign-in-page__div">
      <h1>Thanks for comming <span className="signin__span-color">back</span>!</h1>
      </div>
      
        <SignIn/>   

      </div>
    );
  }
}

export default SignInPage;
