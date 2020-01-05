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

  static getDerivedStateFromError(error) {
    //process the error
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    return this.state.hasError ? (
      <div className="error-boundary__div">
        <img
          src={errorImage}
          alt="Error message"
          className="error-boundary__img"
        />
        <h3>
          Ooops... Something went wrong. Try again later.
        </h3>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
