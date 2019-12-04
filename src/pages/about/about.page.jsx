import React from "react";

import "./about.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectMembersArr } from "../../redux/about/about.selectors";

import MemberCard from '../../components/member-card/member-card.component'

const AboutPage = ({ members }) => {

  return <div className="aboutpage">
  <div
  className="aboutpage__header"
  style={{ backgroundImage: `url("https://i.ytimg.com/vi/xX7RgjPeGg4/maxresdefault.jpg")` }}
>
  <em>
    <h1>Band Members</h1>
  </em>
</div>

    <div className="aboutpage__grid">
    {
        members.map(({id, ...otherCardProps}) => 
        <MemberCard key={id} {...otherCardProps}/>)
    }
    </div>
   
  </div>;
};

const mapStateToProps = createStructuredSelector({
  members: selectMembersArr
});
export default connect(mapStateToProps)(AboutPage);
