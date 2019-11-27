import React from 'react';
import DirectoryCardSongs from '../directory-card-songs/directory-card-songs'
import { createStructuredSelector } from 'reselect'
import { clearCurrentAlbum } from '../../redux/albums/albums.actions'
import { connect } from 'react-redux'
import { selectCurrentSongs, selectCurrentAlbum } from '../../redux/albums/albums.selectors'
import './directory-songs.scss'

class DirectorySongs extends React.Component{

    componentWillUnmount() {
        this.props.clearCurrentAlbum();
      }

      
    render(){
        const { currentSongs, currentAlbum, searchValue } = this.props
        const areCurrentSongs = currentSongs.length;
        let textPromptSongs, textPropmtTitle;
        console.log(currentSongs)
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
        


    return (
    <div className="directorysongs">
{      
      <div className ={textPropmtTitle ? `directorysongs-flex directorysongs-title` : `directorysongs-hidden`}>
            <h1>{textPropmtTitle}</h1>
        </div>
    }
    <div  className={!areCurrentSongs ? "directorysongs-flex " : "directorysongs-grid " }>
    {

        currentSongs.map( ({id, name, short, duration}) =>(
            <DirectoryCardSongs key={id} name={name} short={short} duration={duration}/>
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
    currentAlbum: selectCurrentAlbum
})

const mapDispatchToProps = dispatch =>({
    clearCurrentAlbum:() => dispatch(clearCurrentAlbum())
})

export default connect(mapStateToProps, mapDispatchToProps)(DirectorySongs);