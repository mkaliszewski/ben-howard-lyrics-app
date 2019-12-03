import React from "react";
import { connect } from "react-redux";
import "./album.styles.scss";
import { selectAlbum } from "../../redux/albums/albums.selectors";
import AlbumInfo from "../../components/album-info/album-info.component";
import SpotifyPlayer from "../../components/spotify-player/spotify-player.component";
import SimilarSongsList from '../../components/similar-songs-list/similar-songs-list.component'

const AlbumPage = ({ album }) => {
  const { title, spotifyUri, imageUrlHeader } = album;
  return (
    <div className="albumpage">
      <div
        className="albumpage__header"
        style={{ backgroundImage: `url(${imageUrlHeader})` }}
      >
        <em>
          <h1>{title}</h1>
        </em>
      </div>
      <div className="albumpage__infos">
        <div className="albumpage__info-text">
          <AlbumInfo album={album} />
        </div>
        <div className="albumpage__info-songs">
          <SimilarSongsList album={album} />
        </div>
        <div className="albumpage__info-player">
          <SpotifyPlayer spotifyUri={spotifyUri} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  album: selectAlbum(ownProps.match.params.albumId)(state)
});

export default connect(mapStateToProps)(AlbumPage);
