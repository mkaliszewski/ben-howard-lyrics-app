import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentAlbum } from '../../redux/albums/albums.selectors.js'
import './directory-card-songs.scss'

const DirectoryCardSongs = ({ name, currentAlbum}) =>{
    return (
    <div className={`directorycardsongs directorycardsongs-${currentAlbum.routeName}`} >
        <h3>{name}</h3>
    </div>
)}

const mapStateToProps = createStructuredSelector({
    currentAlbum: selectCurrentAlbum
})

export default connect(mapStateToProps)(DirectoryCardSongs);