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
  setIndex0,
  setIndex1,
  setIndex2,
  setIndex3
} from "../../redux/pictures/pictures.actions";

const Slider = ({
  activePicture,
  setIndex0,
  setIndex1,
  setIndex2,
  setIndex3
}) => {

  const { id, url } = activePicture;

  const setNextPicture = activePicture => {
    switch (activePicture.index) {
      case 0:
        return setIndex1();
      case 1:
        return setIndex2();
      case 2:
        return setIndex3();
      default:
        return;
    }
  };

  const setPrevPicture = activePicture => {
    switch (activePicture.index) {
      case 1:
        return setIndex0();
      case 2:
        return setIndex1();
      case 3:
        return setIndex2();
      default:
        return;
    }
  };
  return (
    <div className="slider">
        <div
          id={`slider-card-${id}`}
          className="slider__content"
          style={{ backgroundImage: `url(${url})` }}
        >
          <button
            className={activePicture.index === 0 ?  `slider__button slider__button-prev hide` : `slider__button slider__button-prev`}

            onClick={() => setPrevPicture(activePicture)}
          >
            &#10094;
          </button>
          <button
          className={activePicture.index === 3 ?  `slider__button slider__button-nxt hide` : `slider__button slider__button-nxt`}
            onClick={() => setNextPicture(activePicture)}
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
  setIndex0: () => dispatch(setIndex0()),
  setIndex1: () => dispatch(setIndex1()),
  setIndex2: () => dispatch(setIndex2()),
  setIndex3: () => dispatch(setIndex3())
});
export default connect(mapStateToProps, mapDispatchToProps)(Slider);
