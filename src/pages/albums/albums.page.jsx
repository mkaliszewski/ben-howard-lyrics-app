import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'
import { selectAllSongs } from '../../redux/albums/albums.selectors'
import { addCurrentSongs } from '../../redux/albums/albums.actions'

import './albums.styles.scss'
import Directory from '../../components/directory/directory.component'
import DirectorySongs from '../../components/directory-songs/directory-songs'
import SearchBar from '../../components/searchbar/searchbar'

class Albums extends React.Component{

    constructor(){
        super();
        this.state = {
            searchField:""
        }
    }

    handleSearchChange = event =>{
        this.setState({ searchField: event.target.value})
    }

    render(){
        const { searchField } = this.state;
        const { allSongs, addFiltredSongs } = this.props;

        const filtredSongs = allSongs.filter(song => song.name.toLowerCase().includes(searchField.toLowerCase()))
        if(searchField.length > 0){
            addFiltredSongs(filtredSongs)
        }else if(searchField.length === 0){
            addFiltredSongs([])
        }

        return(
            <div className="albums">
                <div className="albums__col albums__col-left">
                    <Directory/>
                </div>
                <div className="albums__col albums__col-right">
                    <SearchBar handleSearchChange={this.handleSearchChange} searchValue = {searchField}/>
                    <DirectorySongs searchValue = {searchField}/>
                </div>
            </div>
            
        )
    }
}
    

const mapStateToProps = createStructuredSelector({
    allSongs: selectAllSongs
  })

  const mapDispatchToProps = dispatch =>({
    addFiltredSongs: songs => dispatch(addCurrentSongs(songs))
  })


export default connect(mapStateToProps,mapDispatchToProps)(Albums);