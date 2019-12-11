import React from "react";
import { ReactComponent as HeartLogo } from "../../assets/heart.svg";
import "./song-info.styles.scss";
import { createStructuredSelector } from 'reselect'
import { selectFavSongs, selectCurrentUser } from '../../redux/users/users.selectors'
import { saveFavSongs, deleteFavSongs  } from '../../firebase/firebase.utils'

import { connect } from 'react-redux';
import { addFavSong } from '../../redux/users/users.actions'
import usersActionTypes from "../../redux/users/users.types";

class SongInfo extends React.Component{

  

  render(){
  const { song, currentUser, usersFavSongs } = this.props
  const { id, name, albumTitle, duration, year, text, spotifyUri } = song;

  let heartLogoClass = null;
  let favSongsTypeOfFnc = null;

  if (currentUser !== null){
  if(usersFavSongs.map(song => song["id"]).includes(id)){
    heartLogoClass = "songinfo-red-heart"
    favSongsTypeOfFnc = deleteFavSongs;
  }else{
    heartLogoClass = "songinfo-black-heart"
    favSongsTypeOfFnc = saveFavSongs;
  }}else{
    heartLogoClass = "songinfo-black-heart"
  }




  const contentToHtml = text => {
    return text
      .split("\n")
      .map(paragraph => `<p>${paragraph}</p>`)
      .join("");
  };
 
  console.log()


  let songInfos = contentToHtml(text);
  return (
    <div className="songinfo">
      <div className="songinfo__text">
        <div className="songinfo__text-col1">
          <h2>Title: {name}</h2>
          <h3>Album: {albumTitle}</h3>
        </div>

        <div onClick={() =>currentUser ? favSongsTypeOfFnc(currentUser.id, {albumTitle, id, name, year, duration}) : null}  className={`songinfo__text-col2 ${heartLogoClass}`}>
          <HeartLogo />
        </div>
      </div>
      <div className="songinfo__scroll">
        <div dangerouslySetInnerHTML={{ __html: songInfos }} />
      </div>
    </div>
  );}
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  usersFavSongs: selectFavSongs
})

export default connect(mapStateToProps)(SongInfo);
