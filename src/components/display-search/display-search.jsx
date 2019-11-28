import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectAllSongs } from "../../redux/albums/albums.selectors";
import { addCurrentSongs } from "../../redux/albums/albums.actions";
import "./display-search.scss";
import DirectorySongs from "../directory-songs/directory-songs";
import SearchBar from "../searchbar/searchbar";
import Legend from "../legend/legend.component";

class DisplaySearch extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: ""
    };
  }

  handleSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { searchField } = this.state;
    const { allSongs, addFiltredSongs, songsPage } = this.props;

    const filtredSongs = allSongs.filter(song =>
      song.name.toLowerCase().includes(searchField.toLowerCase())
    );
    if (searchField.length > 0) {
      addFiltredSongs(filtredSongs);
    } else if (searchField.length === 0) {
      addFiltredSongs([]);
    }

    return (
      <div className="displaysearch">
        {
            songsPage ? 
            (<div className="displaysearch__legend">
            <SearchBar
              songsPage={songsPage}
              handleSearchChange={this.handleSearchChange}
              searchValue={searchField}
            />
            <Legend />
          </div>)
          :
          (<SearchBar
            songsPage={songsPage}
            handleSearchChange={this.handleSearchChange}
            searchValue={searchField}
          />)

        }
        

        <DirectorySongs searchValue={searchField} songsPage={songsPage} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  allSongs: selectAllSongs
});

const mapDispatchToProps = dispatch => ({
  addFiltredSongs: songs => dispatch(addCurrentSongs(songs))
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySearch);
