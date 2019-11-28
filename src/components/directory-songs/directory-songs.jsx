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
        const {  currentAlbum, allSongs, searchValue, songsPage } = this.props
        let { currentSongs } = this.props;
        let textPromptSongs, textPropmtTitle;

        if(songsPage && searchValue.length === 0 ){
            currentSongs = allSongs;
        }

        const areCurrentSongs = currentSongs.length;
        console.log(areCurrentSongs > 0);

        if(Object.getOwnPropertyNames(currentAlbum).includes("title")){
            textPropmtTitle = currentAlbum.title
        }

        if(areCurrentSongs === 0 && searchValue.length > 0){
            textPromptSongs = "Sorry, there is no such song"  
        }else if(!areCurrentSongs){
            textPromptSongs = "Select album or type song title"
        }
        else{
            textPromptSongs=null;
        }
        
        console.log(currentSongs.map(song => song["id"]));

    return (
    <div className="directorysongs">
{      
      <div className ={textPropmtTitle ? `directorysongs-flex directorysongs-title` : `directorysongs-hidden`}>
            <h1>{textPropmtTitle}</h1>
        </div>
    }
    <div className={areCurrentSongs  ? "directorysongs-grid" : "directorysongs-flex"}>
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