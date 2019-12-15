import React, {lazy, Suspense} from 'react';
import { Route } from 'react-router-dom'

import './songs.page.styles.scss'
import Spinner from '../../components/spiner/spiner.component';


const SongsListPage = lazy(() => import('../songs-list/songs-list.page'))
const LyricsPage = lazy(() => import('../lyrics/lyrics.page'))

const SongsPage = ({ match }) =>(
    <div className="songspage">
    <Suspense fallback={<Spinner/>}>
        <Route exact path={`${match.path}`} component={SongsListPage}/>
        <Route path={`${match.path}/:songId`} component={LyricsPage}/>
        </Suspense>
    </div>
    
)

export default SongsPage;