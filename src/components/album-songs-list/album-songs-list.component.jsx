import React from 'react'

import './album-songs-list.styles.scss'
import AlbumSongListElement from '../album-songs-list-element/album-songs-list-element.component'


const AlbumSongsList = ({ album:{ songs } }) =>(
    <div className="albumsongslist">
        {
            songs.map( ({id, ...otherSongProps }) =>(
                <AlbumSongListElement key={id} id={id} {...otherSongProps} />
            ))
        }
    </div>
)

export default AlbumSongsList;