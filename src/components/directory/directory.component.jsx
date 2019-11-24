//libs
import React from "react";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

//components
import DirectoryCard from "../directory-card/directory-card.component";
import { selectAlbum } from "../../redux/albums/albums.selectors"

//styles
import './directory.styles.scss'



const Directory = ({ albums }) =>{

    return (
      <div className="directory animated slow slideInLeft">
      {
          albums.map( album  =>(
            <DirectoryCard key={album.id} album={album} />
          ))
      }
    </div>
      
    );

}

const mapStateToProps = createStructuredSelector({
  albums: selectAlbum
})

export default connect(mapStateToProps)(Directory);
