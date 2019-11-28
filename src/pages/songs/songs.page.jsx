import React from 'react';
import { Route } from 'react-router-dom'

import './songs.page.styles.scss'
import DisplaySearch from '../../components/display-search/display-search'
import LyricsPage from '../lyrics/lyrics.page'
const SongsPage = ({ match }) =>(
    <div className="songspage">
        <Route exact path={`${match.path}`} render ={(props) => <DisplaySearch {...props} songsPage={true}/>}/>
        <Route path={`${match.path}/:songId`} component={LyricsPage}/>
    </div>
    
)

export default SongsPage;