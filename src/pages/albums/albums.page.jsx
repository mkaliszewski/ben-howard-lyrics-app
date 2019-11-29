import React from 'react';

import { Route } from 'react-router-dom'
import Directory from '../../components/directory/directory.component'
import AlbumPage from '../album/album.page'
import './albums.styles.scss'
const AlbumsPage = ({ match }) =>(
    <div className="albumspage">
        <Route exact path={`${match.path}`} render = {(props) => <Directory {...props} albumsPage={true}/>}/>
        <Route path={`${match.path}/:albumId`} component={AlbumPage}/>
    
    </div>
)

export default AlbumsPage