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
        const {currentAlbum, currentSongs } = this.props
        console.log(Object.getOwnPropertyNames(currentAlbum).length)
        
    return (
    <div  className={Object.getOwnPropertyNames(currentAlbum).length <2 ? "directorysongs directorysongs-flex " : "directorysongs directorysongs-grid " }>
    {
        currentSongs.map( ({id, name}) =>(
            <DirectoryCardSongs key={id} name={name}/>
        ))
    }
    {
        Object.getOwnPropertyNames(currentAlbum).length < 2 ? (<h1>Choose album to select song</h1>) :  "" 
    } 
    </div>
)}}

const mapStateToProps = createStructuredSelector({
    currentAlbum: selectCurrentAlbum,
    currentSongs: selectCurrentSongs
})

const mapDispatchToProps = dispatch =>({
    clearCurrentAlbum:() => dispatch(clearCurrentAlbum())
})

export default connect(mapStateToProps, mapDispatchToProps)(DirectorySongs);