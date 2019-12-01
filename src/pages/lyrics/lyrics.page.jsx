import React from "react";
import { connect } from "react-redux";

import { selectSong } from "../../redux/albums/albums.selectors";

import SpotifyPlayer from "../../components/spotify-player/spotify-player.component";
import Directory from "../../components/directory/directory.component";
import SongInfo from "../../components/song-info/song-info.component";
import SimilarSongsList from "../../components/similar-songs-list/similar-songs-list.component";
import Slider from "../../components/slider/slider.component";
import "./lyrics.styles.scss";
const LyricsPage = ({ song }) => {
  const { id, name, albumTitle, duration, year, text, spotifyUri } = song;

  return (
    <div className="lyricspage">
      <div className="lyricspage__columns">
        <div className="lyricspage__column lyricspage__column-left">
          <SongInfo song={song} />
        </div>

        <div className="lyricspage__column lyricspage__column-right">
        <div className="lyricspage__row-1">
   

            <Slider />
          </div>
          <div className="lyricspage__row-2">
            <SimilarSongsList id={id} />
            <SpotifyPlayer spotifyUri={spotifyUri} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  song: selectSong(ownProps.match.params.songId)(state)
});

export default connect(mapStateToProps)(LyricsPage);
