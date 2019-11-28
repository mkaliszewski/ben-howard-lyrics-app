import React from 'react';
import './spotify-player.styles.scss'

const SpotifyPlayer = ( { spotifyUri, id }) =>(
    <div>
    <iframe src={`https://open.spotify.com/embed/${spotifyUri}`}  frameborder="0" allowtransparency="true" allow="encrypted-media" title={id}></iframe>
    </div>
)

export default SpotifyPlayer;