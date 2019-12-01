import React from "react";

import './song-info.styles.scss'

const SongInfo = ({
  song: { id, name, albumTitle, duration, year, text, spotifyUri }
}) => {
  const contentToHtml = text => {
    return text
      .split("\n")
      .map(paragraph => `<p>${paragraph}</p>`)
      .join("");
  };

  let songInfos = contentToHtml(text);

  return (
    <div className="songinfo">
    <div className="songinfo__text">
    <h2>Title: {name}</h2>
    <h3>Album: {albumTitle}</h3>
    </div>
      
      <div className="songinfo__scroll">
      <div
      dangerouslySetInnerHTML={{ __html: songInfos }}
      
    />
      </div>
      
    </div>
  );
};

export default SongInfo;
