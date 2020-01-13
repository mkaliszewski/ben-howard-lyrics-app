import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectAllSongs } from "../../redux/albums/albums.selectors";
import { addCurrentSongs } from "../../redux/albums/albums.actions";

import "./songs-list.page.scss";
import DirectorySongs from "../../components/directory-songs/directory-songs";
import SearchBar from "../../components/searchbar/searchbar";
import Legend from "../../components/legend/legend.component";
import Directory from "../../components/directory/directory.component";

class SongsListPage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      value: ""
    };
  }

  handleSearchChange = event => {
    this.setState({ searchField: event.target.value, value: "" });
  };

  handleSelectChange = event => {
    this.setState({ value: event.target.value, searchField: "" });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { searchField, value } = this.state;
    const { allSongs, addFiltredSongs } = this.props;

    const clearState = () => {
      this.setState({ searchField: "", value: "" });
    };

    const filtredSongsValue = allSongs.filter(song =>
      song.guitar.toLowerCase().includes(value.toLowerCase())
    );

    if (value.length > 0) {
      addFiltredSongs(filtredSongsValue);
    } else if (value.length === 0) {
      addFiltredSongs([]);
    }

    const filtredSongsSearchField = allSongs.filter(song =>
      song.name.toLowerCase().includes(searchField.toLowerCase())
    );

    if (searchField.length > 0) {
      addFiltredSongs(filtredSongsSearchField);
    }

    return (
      <section className="songs-list">
      <div className="songs-list__div-circle"/>
        <h2>Find your song!</h2>
      <div className="songs-list__div-columns">
      <div className="songs-list__div-column-1">
      <p>
      There are three ways to find your song:
      </p>
      <ol>
        <li>Select one from the window on the right hand side</li>
        <li>Enter your song title in box bellow</li>
        <li>Maybe you like specific type of guitar? Look bellow</li>
        <li>Select one of albums</li>
      </ol>
      
          <div className="song-list__div-search-bar-container">
            <h3>Filter songs</h3>
            <div className="song-list__div-search-bar">
              <SearchBar
                handleSearchChange={this.handleSearchChange}
                handleSelectChange={this.handleSelectChange}
                handleSubmit={this.handleSubmit}
                searchValue={searchField}
                clear={clearState}
                value={this.state.value}
              />
            </div>
          </div>

          <div className="song-list__div-albums-container">
            <h3>Select album</h3>
            <div className="song-list__div-albums">
              <Directory />
            </div>
          </div>
        </div>
        <div className="songs-list__div-column-2">
          <div className="song-list__div-legend">
            <Legend />
          </div>
          <div className="song-list__div-songs-container">
            <DirectorySongs searchValue={searchField} selectValue={value} />
          </div>
        </div>
      </div>
        
      </section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  allSongs: selectAllSongs
});

const mapDispatchToProps = dispatch => ({
  addFiltredSongs: songs => dispatch(addCurrentSongs(songs))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongsListPage);
