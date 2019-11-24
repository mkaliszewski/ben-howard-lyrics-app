//libs
import React from "react";
import Tilt from "react-tilt";
import { connect } from 'react-redux'
import { addCurrentAlbum } from '../../redux/albums/albums.actions'
//styles
import './directory-card.style.scss'



const DirectoryCard = ( {album, addCurrentAlbum} ) =>{ 
  
  const { imageUrl } = album;
  return (

  <div onClick={() => addCurrentAlbum(album) } className="directory-card">

    <Tilt
      classname = "tilt__div"
      options={{
        max: 15,
        perspective: 4000
      }}
    >
      <img className="directory-card__img" src={`${imageUrl}`} alt="album" />
    </Tilt>
    </div>
)};

const mapDispatchToProps = dispatch =>({
  addCurrentAlbum: album =>dispatch(addCurrentAlbum(album))
})

export default connect(null, mapDispatchToProps)(DirectoryCard);
