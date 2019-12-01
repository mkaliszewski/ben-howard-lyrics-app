import React from "react";
import "./slider.styles.scss";
import CustomButton from '../../components/custom-button/custom-button'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectProperties,
  selectActivePicture
} from "../../redux/pictures/pictures.selectors";
import {
  setActive
} from "../../redux/pictures/pictures.actions";

const Slider = ({
  properties,
  activePicture,
  setActive
}) => {

  const { id, url } = activePicture;


  const nextPicture = () =>{
    const currentIndex = activePicture.index;
    const nextIndex = currentIndex + 1;
    setActive(properties[nextIndex])
  }

  const prevPicture = () =>{
    const currentIndex = activePicture.index;
    const prevIndex = currentIndex - 1;
    setActive(properties[prevIndex])
  }
  console.log(Object.keys(properties))
  ;
  return (
    <div className="slider">
        <div
          id={`slider-card-${id}`}
          className="slider__content"
          style={{ backgroundImage: `url(${url})` }}
        >
          <button
            className={`slider__button slider__button-prev`}
            disabled = {activePicture.index === 0}
            onClick = {() => prevPicture()}
        
          >
            &#10094;
          </button>
          <button
          className={`slider__button slider__button-nxt`}
            disabled={activePicture.index === Object.keys(properties).length - 1}
            onClick={() => nextPicture()}
          >
          &#10095;
          </button>
        </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  properties: selectProperties,
  activePicture: selectActivePicture
});

const mapDispatchToProps = dispatch => ({
  setActive: picture => dispatch(setActive(picture))
});
export default connect(mapStateToProps, mapDispatchToProps)(Slider);
