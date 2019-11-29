import React from "react";
import { connect } from "react-redux";

import { selectSong } from "../../redux/albums/albums.selectors";

import SpotifyPlayer from "../../components/spotify-player/spotify-player.component";
import Directory from '../../components/directory/directory.component'


import "./lyrics.styles.scss";
const LyricsPage = ({ song }) => {
  function contentToHtml(text) {
    return text
      .split('\n')
      .map(paragraph => (`<p>${paragraph}</p>`))
      .join('')
  }
  const { id, name, albumTitle, duration, year, text, spotifyUri } = song;

  let lyrics = contentToHtml(text)
  return (
    <div className="lyricspage">
    <div className="lyricspage__title"><h1>{name}</h1></div>
      <div className="lyricspage__columns">
        <div className="lyricspage__column lyricspage__column-left">
          <div className="lyricspage__lyricsholder">
          <div dangerouslySetInnerHTML={{ __html: lyrics }} className="albuminfo__scroll"/>
          </div>
        </div>

        <div className="lyricspage__column lyricspage__column-center">
          <div className="lyricspage__row lyricspage-info">
            <h2>Song info</h2>
            <div>
              <h4>Title:</h4>
              <p>{name}</p>
            </div>
            <div>
              <h4>Album:</h4>
              <p>{albumTitle}</p>
            </div>
            <div>
              <h4>Duration:</h4>
              <p>{duration}</p>
            </div>
            <div>
              <h4>Year of realease:</h4>
              <p>{year}</p>
            </div>
          </div>
          <div className="lyricspage__row lyricspage-player">
            <SpotifyPlayer spotifyUri={spotifyUri} id={id} />
          </div>
        </div>

        <div className="lyricspage__column lyricspage__column-right">
          <Directory />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  song: selectSong(ownProps.match.params.songId)(state)
});

export default connect(mapStateToProps)(LyricsPage);
