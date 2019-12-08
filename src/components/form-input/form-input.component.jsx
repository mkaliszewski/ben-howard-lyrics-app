import React from "react";

import "./form-input.styles.scss";


class FormInput extends React.Component {
    constructor(){
        super();

        this.state = {
            focused: false
        }
    }

    handleMouseEnter = () =>{
        this.setState(prevState => ({
            focused: !prevState.focused
        }))
    }
  render(){
    const {label, id, value, ...otherFormInputProps} = this.props;
    const { focused } = this.state;
    return (
        <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseEnter}
        
        className={ `${value.length ? `active` : ``}  forminput  ${focused ? `focused` : ``}`}>
          <label for={id} type="text"  className="forminput__label">{label}</label>
          <input id={id} {...otherFormInputProps} className="forminput__box" />
        </div>
      );
    
  }
  
};


export default FormInput;