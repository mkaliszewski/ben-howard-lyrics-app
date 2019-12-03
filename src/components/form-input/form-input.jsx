import React from 'react';

import './form-input.scss'

const FormInput = ({ label, ...otherFormInputProps}) =>(
    <div className="form">
        <input className="form__input" {...otherFormInputProps}/>
        
        <label className={`${otherFormInputProps.value.length ? "shrink" : "" } form__label`}>
            {label}
        </label>

    </div>
)

export default FormInput;