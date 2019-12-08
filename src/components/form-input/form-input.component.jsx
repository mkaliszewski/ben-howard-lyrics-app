import React from "react";

import "./form-input.styles.scss";

class FormInput extends React.Component {
  constructor() {
    super();

    this.state = {
      focused: false
    };
  }

  handleMouseEnter = () => {
    this.setState(prevState => ({
      focused: !prevState.focused
    }));
  };
  render() {
    const { label, id, value, handleChange, ...otherFormInputProps } = this.props;
    const { focused } = this.state;

    console.log(value)

    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseEnter}
        className={`${value.length ? `active` : ``}  forminput  ${
          focused ? `focused` : ``
        }`}
      >
        <input onChange={handleChange} value={value} id={id} {...otherFormInputProps} className="forminput__box" />
        <label for={id} type="text" className="forminput__label">
          {label}
        </label>
      </div>
    );
  }
}

export default FormInput;
