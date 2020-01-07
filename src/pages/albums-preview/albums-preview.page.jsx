import React from 'react';

import './album-preview.styles.scss'

import Directory from '../../components/directory/directory.component'
const AlbumsPreview = () =>{

    return(
        <div className="album-preview">
        <span className="album-preview__span"><h1>Select one of the albums and begin 
        your experience</h1></span>
        <div className="album-preview__circle"/>
            <Directory albumsPage={true}/>
        </div>
    )
}

export default AlbumsPreview;