import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectAllSongs } from "../../redux/albums/albums.selectors";
import { addCurrentSongs } from "../../redux/albums/albums.actions";
import './songs-list.page.scss'
import DirectorySongs from "../../components/directory-songs/directory-songs";
import SearchBar from "../../components/searchbar/searchbar";
import Legend from "../../components/legend/legend.component";
import Directory from "../../components/directory/directory.component";

class SongsListPage extends React.Component {
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
    const { allSongs, addFiltredSongs } = this.props;

    const filtredSongs = allSongs.filter(song =>
      song.name.toLowerCase().includes(searchField.toLowerCase())
    );
    if (searchField.length > 0) {
      addFiltredSongs(filtredSongs);
    } else if (searchField.length === 0) {
      addFiltredSongs([]);
    }
    return (
      <div className="songslist">
        <div className="songslist__col songslist__col-1">

          <div className="songslist__legend">
            <Legend />
          </div>

          <div className="songslist__search">
            <SearchBar
              handleSearchChange={this.handleSearchChange}
              searchValue={searchField}
            />
          </div>

          <div className="songslist__directory">
            <Directory />
          </div>

        </div>
          
    

        <div className="songslist__col songslist__col-2">
          <div className="displaysearch">
            <DirectorySongs searchValue={searchField} />
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SongsListPage);
