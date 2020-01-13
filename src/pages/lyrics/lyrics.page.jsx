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
    <section className="lyrics-page">
      <div className="lyrics-page__div-grid-1">
        <SongInfo song={song} lyrics/>
      </div>
      <div className="lyrics-page__div-grid-2">
        <Slider />
      </div>
      <div className="lyrics-page__div-grid-3">
        <SimilarSongsList id={id} />
        <SpotifyPlayer spotifyUri={spotifyUri} lyrics />
      </div>
    </section>
  );
};

const mapStateToProps = (state, ownProps) => ({
  song: selectSong(ownProps.match.params.songId)(state)
});

export default connect(mapStateToProps)(LyricsPage);
