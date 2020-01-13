import React from 'react';
import './spotify-player.styles.scss'
import Iframe from 'react-iframe'

const SpotifyPlayer = ( { spotifyUri, id, lyrics }) =>(
    <div className={lyrics ? "spotifyplayer spotifyplayer-height" : "spotifyplayer"}>
    <Iframe url={`https://open.spotify.com/embed/${encodeURI(spotifyUri)}`}
        id={id}
        display="initial"
        position="relative"/>
    </div>
)

export default SpotifyPlayer;