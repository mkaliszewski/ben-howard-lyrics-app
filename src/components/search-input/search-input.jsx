import React from 'react';

import './search-input.scss'

const SearchInput = ({ label, ...otherSearchInputProps}) =>(
    <div className="form">
        <input className="form__input" {...otherSearchInputProps}/>
        
        <label className={`${otherSearchInputProps.value.length ? "shrink" : "" } form__label`}>
            {label}
        </label>

    </div>
)

export default SearchInput;