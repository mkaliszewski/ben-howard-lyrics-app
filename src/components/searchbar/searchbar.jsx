import React from "react";

import FormInput from '../form-input/form-input'
import "./searchbar.scss";

const SearchBar = ({ handleSearchChange, searchValue }) => (
      <div className="searchbar">
        <div className="searchbar__textInput">
          <FormInput
            onChange = {handleSearchChange}
            name="text"
            type="text"
            label="Enter song title"
            value={searchValue}
            />
        </div>
      </div>
    );



export default SearchBar;
