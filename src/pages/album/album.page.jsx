import React from "react";
import { connect } from "react-redux";
import "./album.styles.scss";
import { selectAlbum } from "../../redux/albums/albums.selectors";
import AlbumInfo from "../../components/album-info/album-info.component";
import SpotifyPlayer from "../../components/spotify-player/spotify-player.component";

import Image_1 from "../../assets/album_1.jpg";
import Image_2 from "../../assets/album_2.jpg";

import SimilarSongsList from "../../components/similar-songs-list/similar-songs-list.component";

const AlbumPage = ({ album }) => {
  const { title, spotifyUri, imageUrl, id } = album;
  console.log(id);
  return (
    <div className="album-page">
      <div className="album-page__div-intro">
        <div
          className={
            id === 2
              ? "album-page__div-heading album-page__div-heading-font"
              : "album-page__div-heading"
          }
        >
          <h2>{title}</h2>
        </div>

        <div
          className="album-page__div-cover"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>

      <div className="album-page__div-container">
        <div className="album-page__div-info">
          <AlbumInfo album={album} />
        </div>

        <div className="album-page__div-image" style={{ backgroundImage: `url(${Image_1})` }}></div>
      </div>

      <div className="album-page__div-container-reverse">
        <div className="album-page__div-songs">
          <SimilarSongsList album={album} />
        </div>
        <div
          className="album-page__div-image"
          style={{ backgroundImage: `url(${Image_2})` }}
        ></div>
      </div>
      {
        // <div className="albumpage__infos">
        //
        //   <div className="albumpage__info-player">
        //     <SpotifyPlayer spotifyUri={spotifyUri} />
        //   </div>
        // </div>
      }
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  album: selectAlbum(ownProps.match.params.albumId)(state)
});

export default connect(mapStateToProps)(AlbumPage);
