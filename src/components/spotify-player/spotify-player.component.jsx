import React from 'react';
import './spotify-player.styles.scss'

const SpotifyPlayer = ( { spotifyUri, id }) =>(
    <div className="spotifyplayer">
    <iframe src={`https://open.spotify.com/embed/${spotifyUri}`}  frameBorder="0" allowtransparency="true" allow="encrypted-media" title={id}></iframe>
    </div>
)

export default SpotifyPlayer;