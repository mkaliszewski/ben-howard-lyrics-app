import React from 'react';
import { Route } from 'react-router-dom'

import './songs.page.styles.scss'
import SongsListPage from '../songs-list/songs-list.page'
import LyricsPage from '../lyrics/lyrics.page'
const SongsPage = ({ match }) =>(
    <div className="songspage">
        <Route exact path={`${match.path}`} component={SongsListPage}/>
        <Route path={`${match.path}/:songId`} component={LyricsPage}/>
    </div>
    
)

export default SongsPage;