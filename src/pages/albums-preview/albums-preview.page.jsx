import React from 'react';

import './album-preview.styles.scss'

import Directory from '../../components/directory/directory.component'
const AlbumsPreview = () =>{

    return(
        <div className="album-preview">
<h2>Select one of the albums and begin 
        your experience</h2> 
            <Directory albumsPage={true}/>
        </div>
    )
}

export default AlbumsPreview;