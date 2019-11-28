import React from "react";
import Custombutton from '../custom-button/custom-button'

import FormInput from '../form-input/form-input'
import "./searchbar.scss";

const SearchBar = ({songsPage, handleSearchChange, searchValue }) => (
      <div className={songsPage ? `searchbar-songspage` : 'searchbar'}>
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
