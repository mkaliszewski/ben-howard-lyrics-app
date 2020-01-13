import React from 'react'

import './similar-songs-list.styles.scss'
import SimilarSongsListElement from '../similar-songs-list-element/similar-songs-list-element.component'

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'
import { selectAllSongs } from '../../redux/albums/albums.selectors'


const SimilarSongsList = ({album, allSongs, id, favSongs }) =>{

const findOtherSongs = arr => arr.filter(song => song["id"] !== id).sort(() => 0.5-Math.random()).slice(0,10)
let otherSongs, headerTitle;


if(album){
    otherSongs = album.songs
    headerTitle="Songs on the album"
}else if(favSongs){
    otherSongs = favSongs
    headerTitle=`Your favourite songs`
}else{
    otherSongs = findOtherSongs(allSongs)
    headerTitle="Related songs"
}

console.log(!!favSongs)

return(
    <div className={favSongs ? "similarsongslist similarsongslist-row" : "similarsongslist"}>
    <h2>{headerTitle}</h2>
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
        otherSongs.length
        ?
        (otherSongs.map( ({id, ...otherSongProps }) =>(
            <SimilarSongsListElement key={id} id={id} {...otherSongProps} />
        )))
        :
        <h2 style={{marginTop: "2rem"}}>Oooooops it's empty</h2>
    }
    </div>
        
    </div>
)}

const mapStateToProps = createStructuredSelector({
    allSongs: selectAllSongs
})

export default connect(mapStateToProps)(SimilarSongsList);