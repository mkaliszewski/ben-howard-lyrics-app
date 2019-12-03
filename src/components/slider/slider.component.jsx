import React from "react";
import "./slider.styles.scss";
import SliderCard from "../slider-card/slider-card.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectProperties,
  selectActivePicture
} from "../../redux/pictures/pictures.selectors";
import { setActive } from "../../redux/pictures/pictures.actions";

class Slider extends React.Component {

  componentWillUnmount(){
    this.props.setActive(this.props.properties[4])
  }

  render(){
  const { properties, activePicture, setActive } = this.props;
  const { id, url, index } = activePicture;

  const nextPicture = () => {
    const nextIndex = activePicture.index + 1;
    setActive(properties[nextIndex]);
  };

  const prevPicture = () => {
    const prevIndex = activePicture.index - 1;
    setActive(properties[prevIndex]);
  };

  return (
    <div className="slider" disabled={index === properties.length - 1}>
      <div className="slider__buttons">
        <button
          className={`slider__button slider__button-prev`}
          disabled={index === 0}
          onClick={() => prevPicture()}
        >
          &#10094;
        </button>
        <button
          className={`slider__button slider__button-nxt`}
          disabled={index === properties.length - 1}
          onClick={() => nextPicture()}
        >
          &#10095;
        </button>
      </div>
      <div className="slider__container-out">
        <div
          className={`slider__container slider-active-${activePicture.index}`}
        >
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(-${activePicture.index * 100}%)`
            }}
          >
            {properties.map(property => (
              <SliderCard
                properties={properties}
                nextPicture={nextPicture}
                prevPicture={prevPicture}
                activePicture={property}
                key={property.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );}
};

const mapStateToProps = createStructuredSelector({
  properties: selectProperties,
  activePicture: selectActivePicture
});

const mapDispatchToProps = dispatch => ({
  setActive: picture => dispatch(setActive(picture))
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
