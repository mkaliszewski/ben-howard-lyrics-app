import React, {lazy, Suspense} from 'react';

import { Route } from 'react-router-dom'

import './albums.styles.scss'
import Spinner from '../../components/spiner/spiner.component';


const AlbumsPreview = lazy(() => import('../albums-preview/albums-preview.page'))
const AlbumPage = lazy(() => import ('../album/album.page'))

const AlbumsPage = ({ match }) =>(
    <div className="albumspage">
        <Suspense fallback={<Spinner/>}>
        <Route exact path={`${match.path}`} component={AlbumsPreview}/>
        <Route path={`${match.path}/:albumId`} component={AlbumPage}/>
        </Suspense>
    
    </div>
)

export default AlbumsPage