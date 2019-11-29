import React from 'react';
import DirectoryCardSongs from '../directory-card-songs/directory-card-songs'
import { createStructuredSelector } from 'reselect'
import { clearCurrentAlbum } from '../../redux/albums/albums.actions'
import { connect } from 'react-redux'
import { selectCurrentSongs, selectCurrentAlbum, selectAllSongs } from '../../redux/albums/albums.selectors'
import './directory-songs.scss'

class DirectorySongs extends React.Component{

    componentWillUnmount() {
        this.props.clearCurrentAlbum();
      }

      
    render(){
        const {  allSongs, searchValue, currentAlbum } = this.props
        let { currentSongs } = this.props;
        let textPromptSongs;

        if( !Object.getOwnPropertyNames(currentAlbum).includes("title") && searchValue.length ===0){
            currentSongs = allSongs;
        }

        const areCurrentSongs = currentSongs.length;

        if(areCurrentSongs === 0 && searchValue.length > 0){
            textPromptSongs = "Sorry, there is no such song"  
        }else{
            textPromptSongs=null;
        }


    return (
    <div className="directorysongs">

    <div className={areCurrentSongs > 3  ? "directorysongs-grid animated slow fadeIn" : "directorysongs-flex"}>
    {

        currentSongs.map( ({id, ...otherSongProps }) =>(
            <DirectoryCardSongs key={id} id={id} {...otherSongProps} />
        ))
    }
    {
          <h2>{textPromptSongs}</h2>
            
    } 
    </div>
    </div>
    
)}}

const mapStateToProps = createStructuredSelector({
    currentSongs: selectCurrentSongs,
    currentAlbum: selectCurrentAlbum,
    allSongs: selectAllSongs
})

const mapDispatchToProps = dispatch =>({
    clearCurrentAlbum:() => dispatch(clearCurrentAlbum())
})

export default connect(mapStateToProps, mapDispatchToProps)(DirectorySongs);