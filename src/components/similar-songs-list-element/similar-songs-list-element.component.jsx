import React from 'react'

import './similar-songs-list-element.styles.scss'
import { withRouter } from 'react-router-dom'

const SimilarSongsListElement = ({ name, duration, history, match, id }) =>(
    <div onClick={() => history.push(`/songs/${id}`)}o className="similarsongslistelement">
    <div className="similarsongslistelement__column-left">
    <h4>{name}</h4>
    </div>
    <div className="similarsongslistelement__column-right">
    <p>{duration}</p>
    </div>
    </div>
)


export default withRouter(SimilarSongsListElement);