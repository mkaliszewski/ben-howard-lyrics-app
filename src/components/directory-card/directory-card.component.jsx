//libs
import React from "react";
import Tilt from "react-tilt";
import { connect } from 'react-redux'
import { addCurrentAlbum } from '../../redux/albums/albums.actions'
import { withRouter } from 'react-router-dom'
//styles
import './directory-card.style.scss'



const DirectoryCard = ( {album, addCurrentAlbum, albumsPage, history, match} ) =>{ 
  

  const { imageUrl, id, title } = album;

  const linkTo = () => history.push(`${match.url}/${id}`);
  const addAlbum = () => addCurrentAlbum(album);
  return (

  <div onClick = {albumsPage ? linkTo : addAlbum}  className="directory-card">

    <Tilt
      classname = "tilt__div"
      options={{
        max: 20,
        perspective: 4000,
        scale: 1
      }}
    >
      <img className={albumsPage ? `directory-card__img-albumspage` : `directory-card__img `}src={`${imageUrl}`} alt="album" />
      {
        albumsPage ?

        (<div className="directory-card-info">
        <div className="directory-card-title"><h2>{title}</h2></div>
        <div className="directory-card-icon">i</div>
        <div className="directory-card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
      </div>)
      :
      null

      }
      
    </Tilt>
    </div>
)};

const mapDispatchToProps = dispatch =>({
  addCurrentAlbum: album =>dispatch(addCurrentAlbum(album))
})

export default withRouter(connect(null, mapDispatchToProps)(DirectoryCard));
