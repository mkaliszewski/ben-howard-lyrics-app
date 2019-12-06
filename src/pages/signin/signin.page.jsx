import React from "react";
import SignIn from '../../components/signin/signin.component'
import "./signin.styles.scss";

class SignInPage extends React.Component {
  render() {
    return (
      <div className="signinpage">

      <div className="signin__container">
        <SignIn/>
      </div>
      </div>
    );
  }
}

export default SignInPage;
