import React from 'react';


import './albums.styles.scss'
import Directory from '../../components/directory/directory.component'
import DirectorySongs from '../../components/directory-songs/directory-songs'
import SearchBar from '../../components/searchbar/searchbar'
const Albums = ({ albums }) =>{
    return(
        <div className="albums">
            <div className="albums__col albums__col-left">
                <Directory/>
            </div>
            <div className="albums__col albums__col-right">
                <SearchBar/>
                <DirectorySongs/>
            </div>
        </div>
        
    )
}


export default Albums;