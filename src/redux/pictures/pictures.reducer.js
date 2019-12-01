import picturesActionTypes from "./pictures.types";
const INITIAL_STATE = {
  properties: {
    "0": {
      index: 0,
      id: 1,
      url: "https://ichef.bbci.co.uk/images/ic/960x540/p0638w8h.jpg"
    },
    "1": {
      index: 1,
      id: 2,
      url: "http://mad-music.pl/wp-content/uploads/2018/03/ben-howard.jpg"
    },
    "2": {
      index: 2,
      id: 3,
      url: "https://oor.nl/media/2018/07/05-Ben-Howard-jul18-Luuk-Denekamp.jpg"
    },
    "3": {
      index: 3,
      id: 4,
      url:
        "https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/01/Ben-Howard-1-920x584.jpg"
    }
  },

  activePicture: {
    index: 0,
    id: 1,
    url: "https://ichef.bbci.co.uk/images/ic/960x540/p0638w8h.jpg"
  }
};

const picturesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case picturesActionTypes.SET_ACTIVE:
      return {
        ...state,
        activePicture: action.payload
      };
    default:
      return state;
  }
};
export default picturesReducer;
