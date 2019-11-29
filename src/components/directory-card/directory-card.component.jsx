//libs
import React from "react";
import Tilt from "react-tilt";
import { connect } from 'react-redux'
import { addCurrentAlbum } from '../../redux/albums/albums.actions'
import { withRouter } from 'react-router-dom'
//styles
import './directory-card.style.scss'



const DirectoryCard = ( {album, addCurrentAlbum, albumsPage, history, match} ) =>{ 
  

  const { imageUrl, id } = album;

  const linkTo = () => history.push(`${match.url}/${id}`);
  const addAlbum = () => addCurrentAlbum(album);
  return (

  <div onClick = {albumsPage ? linkTo : addAlbum}  className="directory-card">

    <Tilt
      classname = "tilt__div"
      options={{
        max: 15,
        perspective: 4000
      }}
    >
      <img className={albumsPage ? `directory-card__img-albumspage` : `directory-card__img `}src={`${imageUrl}`} alt="album" />
    </Tilt>
    </div>
)};

const mapDispatchToProps = dispatch =>({
  addCurrentAlbum: album =>dispatch(addCurrentAlbum(album))
})

export default withRouter(connect(null, mapDispatchToProps)(DirectoryCard));
