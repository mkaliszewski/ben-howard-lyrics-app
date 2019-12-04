import React from 'react'
import './member-card.styles.scss'
import InstagramIcon from '../../assets/instagram.svg'
const MemberCard = ({ name, lastName, url, insta}) =>{

    return(
        <div className="membercard">
            <div className = "membercard-front">
              <div className = "membercard__image" style={{backgroundImage:`url(${url})`}}>
              </div>

              <div className = "membercard__info">
              <div className="membercard__info-left">
              <h3>{name} {lastName}</h3>
              </div>
                
                <div className="membercard__info-right">
                <a href={insta} target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} alt="icon" className="membercard__logo"/></a>  
                </div>
                
              </div>


            </div>


            <div className = "membercard-back">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <div className="membercard-back-icon"><h3>i</h3></div>
            </div>
        </div>
    )
}

export default MemberCard;