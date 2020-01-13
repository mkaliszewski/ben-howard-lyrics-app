import React from "react";

import "./profile.styles.scss";
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/users/users.selectors'
import SimilarSongsList from '../../components/similar-songs-list/similar-songs-list.component'

import HeaderBackground from '../../assets/header.svg'

const ProfilePage = ({currentUser}) => (
  <div className="profile-page">
  <div className="profile-page__heading" style={{backgroundImage: `url(${HeaderBackground})`}}>
  <h2>{`Welcome ${currentUser.displayName}`}</h2>
  </div>
       
    <div className="profile-page__div-columns">
      <div className="profile-page__div-column-1">
      <SimilarSongsList favSongs={currentUser.favSongs} />
      </div>
      <div className="profile-page__div-column-2">
        <h3>You checked lyrics of</h3>
        <h2>{currentUser.counter}</h2>
        <h3>songs</h3>
      </div>
    </div>
  </div>
);



const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(ProfilePage);
