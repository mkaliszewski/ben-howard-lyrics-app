import React from 'react'

import './similar-songs-list.styles.scss'
import SimilarSongsListElement from '../similar-songs-list-element/similar-songs-list-element.component'

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'
import { selectAllSongs } from '../../redux/albums/albums.selectors'


const SimilarSongsList = ({album, allSongs, id }) =>{

const findOtherSongs = arr => arr.filter(song => song["id"] !== id).sort(() => 0.5-Math.random()).slice(0,10)
let otherSongs;


album ? 
otherSongs = album.songs
:
otherSongs = findOtherSongs(allSongs)



return(
    <div className="similarsongslist">
    <h2>{album ? `Other songs on the album` : `Related songs` }</h2>
    <div className="similarsongslist__columns">
    <div className="similarsongslist__column-left">
    <h5>Song title</h5>
    </div>
    <div className="similarsongslist__column-right">
    <h5>Length</h5>
    </div>
    </div>
    
    <div div className="similarsongslist__scroll">
    {
        otherSongs.map( ({id, ...otherSongProps }) =>(
            <SimilarSongsListElement key={id} id={id} {...otherSongProps} />
        ))
    }
    </div>
        
    </div>
)}

const mapStateToProps = createStructuredSelector({
    allSongs: selectAllSongs
})

export default connect(mapStateToProps)(SimilarSongsList);