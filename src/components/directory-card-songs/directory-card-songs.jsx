import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentAlbum, selectCurrentSongs } from '../../redux/albums/albums.selectors.js'
import './directory-card-songs.scss'

const DirectoryCardSongs = ({ name, currentAlbum, short, duration}) =>{
    return (
    <div className={`directorycardsongs directorycardsongs-${short}`} >
        <h3>{name}</h3>
    </div>
)}

const mapStateToProps = createStructuredSelector({
    currentAlbum: selectCurrentAlbum,
    currentSongs: selectCurrentSongs
})

export default connect(mapStateToProps)(DirectoryCardSongs);