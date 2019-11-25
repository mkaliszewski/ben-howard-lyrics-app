import React from "react";
import Custombutton from '../custom-button/custom-button'

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
        <div className="searchbar__datalist">
          <input list="albums" />
          <datalist id="albums">
            <option value="Every Kingdom" />
            <option value="I Forget Where We Were" />
            <option value="Noonday Dream" />
          </datalist>
    
        </div>
      </div>
    );



export default SearchBar;
