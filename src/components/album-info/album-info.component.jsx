import React from "react";
import './album-info.styles.scss'

const AlbumInfo = ({ album: { title, info, length, producer, year, wikiUrl } }) => {
  
    const contentToHtml = (text) => {
        return text
          .split('\n')
          .map(paragraph => (`<p>${paragraph}</p>`))
          .join('')
      }

    let albumInfos = contentToHtml(info);

    console.log(typeof albumInfos)
    return(
  <div className="albuminfo">
    <h2>{title}</h2>
    <div className="albuminfo__options">
      <div className="albuminfo__option">
        <h4>Realease date: </h4> 
        <p>{year}</p>
      </div>
      <div className="albuminfo__option">
        <h4>Length: </h4> 
        <p>{length} h</p>
      </div>
      <div className="albuminfo__option">
        <h4>Producer: </h4> 
        <p>{producer}</p>
      </div>
      <div className="albuminfo__option-last">
        <h4>Album info:</h4>
        <div dangerouslySetInnerHTML={{ __html: albumInfos }} className="albuminfo__scroll"/>
        <a className="albuminfo__link" href={`${wikiUrl}`} alt="Wikipedia" target="_blank" rel="noopener noreferrer"><h4>Read more...</h4></a>
      </div>
        
      </div>
    </div>
);}




export default AlbumInfo;
