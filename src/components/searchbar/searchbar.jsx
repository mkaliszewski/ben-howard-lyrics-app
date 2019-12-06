import React from "react";

import SearchInput from "../search-input/search-input";
import "./searchbar.scss";
import { connect } from "react-redux";
import { addCurrentSongs } from "../../redux/albums/albums.actions.js";
import CustomButton from "../custom-button/custom-button";
import { selectAllSongs } from "../../redux/albums/albums.selectors";
import { createStructuredSelector } from "reselect";
import SelectForm from "../select-form/select-form.component";

const SearchBar = ({
  handleSearchChange,
  searchValue,
  allSongs,
  clearSearch,
  clear,
  handleSelectChange,
  handleSubmit,
  value
}) => {
  const guitarTypesObj = new Set(allSongs.map(song => song.guitar));
  const guitarTypesArr = [...guitarTypesObj];

  return (
    <div className="searchbar">
      <div className="searchbar__searchForms">
        <div className="searchbar__textInput">
          <SearchInput
            onChange={handleSearchChange}
            name="text"
            type="text"
            label="Enter song title"
            value={searchValue}
          />
        </div>
        <div className="searchbar__text">
        <h4>or select guitar type</h4>
        </div>
      
        <div className="searchbar__select">
          <SelectForm
            handleSelectChange={handleSelectChange}
            handleSubmit={handleSubmit}
            value={value}
            guitarTypes={guitarTypesArr}
          />
        </div>
      </div>
    <div className="searchbar__buttons">
  <div
    onClick={() => {
      clearSearch(allSongs);
      clear();
    }}
    className="searchbar__button"
  >
    <CustomButton>Reset</CustomButton>
  </div>
    </div>
      
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  allSongs: selectAllSongs
});

const mapDispatchToProps = dispatch => ({
  clearSearch: songs => dispatch(addCurrentSongs(songs))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
