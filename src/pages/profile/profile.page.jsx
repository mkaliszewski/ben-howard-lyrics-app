import React from "react";

import "./profile.styles.scss";
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/users/users.selectors'
import SimilarSongsList from '../../components/similar-songs-list/similar-songs-list.component'


const ProfilePage = ({currentUser}) => (
  <div className="profilepage">
    <div className="profilepage__header" style={{backgroundImage: `url("https://images.unsplash.com/photo-1417733403748-83bbc7c05140?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")`}}
    >
        <h1>{`Welcome ${currentUser.displayName}`}</h1>
    </div>
    <div className="profilepage__columns">
      <div className="profilepage__col1">
      <SimilarSongsList favSongs={currentUser.favSongs} />
      </div>
      <div className="profilepage__col2">
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
