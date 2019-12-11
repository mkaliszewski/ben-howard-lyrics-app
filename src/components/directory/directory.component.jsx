//libs
import React from "react";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

//components
import DirectoryCard from "../directory-card/directory-card.component";
import { selectAlbums } from "../../redux/albums/albums.selectors"

//styles
import './directory.styles.scss'




const Directory = ({ albums, albumsPage }) =>{
  console.log(albums)
    return (
      <div className={ albumsPage ?  `animated slow slideInLeft directory-row` : `directory-row`}>
      {
          albums.map( album  =>(
            <DirectoryCard albumsPage={albumsPage} key={album.id} album={album} />
          ))
      }
    </div>
      
    );

}

const mapStateToProps = createStructuredSelector({
  albums: selectAlbums
})

export default connect(mapStateToProps)(Directory);
