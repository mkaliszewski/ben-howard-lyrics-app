import React, {useState} from "react";

import "./form-input.styles.scss";

const FormInput = ({ label, id, value, handleChange, ...otherFormInputProps }) =>{

 const [focused, setFocused] = useState(false);
 return(

      <div
        onMouseEnter={() => setFocused(!focused)}
        onMouseLeave={() => setFocused(!focused)}
        className={`${value.length ? `active` : ``}  forminput  ${
          focused ? `focused` : ``
        }`}
      >
        <input onChange={handleChange} value={value} id={id} {...otherFormInputProps} className="forminput__box" />
        <label htmlFor={id} type="text" className="forminput__label">
          {label}
        </label>
      </div>
    );
}

export default FormInput;
