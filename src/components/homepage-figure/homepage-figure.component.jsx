import React from 'react';
import './homepage-figure.styles.scss'
import { withRouter } from 'react-router-dom';

const HomepageFigure = ({id, imgUrl, description, category, match, history }) =>{
    return(
        <figure className={`figure figure--${id}`}>
            <img onClick = {() =>history.push(`${match.url}${category}`)} src={imgUrl} alt="Link logo" className="figure__img"/>
            <figcaption className="figcaption">
                <p>{description}</p>
            </figcaption>
        </figure>
    )
    }


export default withRouter(HomepageFigure);