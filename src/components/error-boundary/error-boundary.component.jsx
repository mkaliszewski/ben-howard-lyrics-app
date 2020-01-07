import React from "react";
import './error-boundary.styles.scss'
import errorImage from "../../assets/error.png";
class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }
  //in this way we can get any type of error, our app and server
  static getDerivedStateFromError(error) {
    //process the error
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    return this.state.hasError ? (
      <div className="error-boundary">
      <h1>
      Ooops... Something went wrong. Try again later.
    </h1>
        <img
          src={errorImage}
          alt="Error message"
          className="error-boundary__img"
        />
       
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
