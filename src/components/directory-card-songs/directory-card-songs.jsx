import React from "react";
import ReactCardFlip from 'react-card-flip'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { incCounter } from '../../firebase/firebase.utils'
import { selectCurrentUser } from '../../redux/users/users.selectors'
import "./directory-card-songs.scss";

class DirectoryCardSongs extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
 
  }
  handleClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  
  render(){
    const {name, short, duration, year, id, currentUser } = this.props;
    const { isFlipped } = this.state;

    return (

      <ReactCardFlip  isFlipped={isFlipped} flipDirection="horizontal" flipSpeedFrontToBack={0.8} flipSpeedBackToFront={0.8}>
        <div is={`${short}-front`} onClick={this.handleClick} >
          <h3>{name}</h3>
        </div>
        <div onClick={this.handleClick} className={`react-card-back-${short}`}>
          <span className="directorycardsongs__span"><h4>Duration:</h4><p>{duration}</p></span>
          <span className="directorycardsongs__span"><h4>Year:</h4><p>{year}</p></span>
          <span onClick={() => currentUser ? incCounter(currentUser.id) : null} className="directorycardsongs__span"><em><Link to={`/songs/${id}`} >See lyrics</Link></em></span>
        </div>
      </ReactCardFlip>
    );
  }
  
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


export default connect(mapStateToProps)(DirectoryCardSongs);
