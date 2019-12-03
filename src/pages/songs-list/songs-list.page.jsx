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
      searchField: "",
      value:""
    };
  }

  handleSearchChange = event => {
    this.setState({ searchField: event.target.value, value:"" });
  };

  handleSelectChange = event =>{
    this.setState({ value: event.target.value, searchField:"" })
  }

  handleSubmit = event =>{
    event.preventDefault();
    
  }

  render() {
    const { searchField, value } = this.state;
    const { allSongs, addFiltredSongs } = this.props;

    const clearState = () =>{
        this.setState({searchField:"", value:""})
    }

    const filtredSongsValue = allSongs.filter(song=>song.guitar.toLowerCase().includes(value.toLowerCase()))

    if(value.length > 0){
      addFiltredSongs(filtredSongsValue)
    }else if(value.length ===0){
      addFiltredSongs([])
    }


    const filtredSongsSearchField = allSongs.filter(song =>
      song.name.toLowerCase().includes(searchField.toLowerCase())
    );

    if (searchField.length > 0) {
      addFiltredSongs(filtredSongsSearchField);
    }

    
    return (
      <div className="songslist">
        <div className="songslist__col songslist__col-1">

          <div className="songslist__legend">
            <Legend />
          </div>

          <div className="songslist__search">
          <div className="songslist__search-text">
          <h2>Filter songs</h2>
          </div>
          <div className="songslist__search-content">
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

          <div className="songslist__directory">
            <div className="songslist__directory-text">
                <h2>Select album</h2>
            </div>
            <div className="songslist__directory-content">
            <Directory />
            </div>
            
          </div>

        </div>
          
    

        <div className="songslist__col songslist__col-2">
          <div className="displaysearch">
            <DirectorySongs searchValue={searchField} selectValue={value} />
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
  addFiltredSongs: songs => dispatch(addCurrentSongs(songs)),

});

export default connect(mapStateToProps, mapDispatchToProps)(SongsListPage);
