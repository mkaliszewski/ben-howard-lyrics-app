import React from 'react'

import './album-songs-list-element.styles.scss'
import { withRouter } from 'react-router-dom'

const AlbumSongsListElement = ({ name, duration, history, match, id }) =>(
    <div onClick={() => history.push(`/songs/${id}`)}o className="albumsongslistelement">
    <div>
    <h2>{name}</h2>
    </div>
    <div>
    <h3>{duration}</h3>
    </div>
    </div>
)


export default withRouter(AlbumSongsListElement);