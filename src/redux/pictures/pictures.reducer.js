import picturesActionTypes from "./pictures.types";
const INITIAL_STATE = {
  properties: [
    {
      index: 0,
      id: 1,
      url: "https://ichef.bbci.co.uk/images/ic/960x540/p0638w8h.jpg"
    },
    {
      index: 1,
      id: 2,
      url: "http://mad-music.pl/wp-content/uploads/2018/03/ben-howard.jpg"
    },
    {
      index: 2,
      id: 3,
      url: "https://oor.nl/media/2018/07/05-Ben-Howard-jul18-Luuk-Denekamp.jpg"
    },
    {
      index: 3,
      id: 4,
      url:
        "https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/01/Ben-Howard-1-920x584.jpg"
    }
  ],

  activePicture: {
    index: 0,
    id: 1,
    url: "https://ichef.bbci.co.uk/images/ic/960x540/p0638w8h.jpg"
  }
};

const picturesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case picturesActionTypes.SET_INDEX_0:
      return {
        ...state,
        activePicture: state.properties[0]
      };
    case picturesActionTypes.SET_INDEX_1:
      return {
        ...state,
        activePicture: state.properties[1]
      };
    case picturesActionTypes.SET_INDEX_2:
      return {
        ...state,
        activePicture: state.properties[2]
      };
    case picturesActionTypes.SET_INDEX_3:
      return {
        ...state,
        activePicture: state.properties[3]
      };
    default:
      return state;
  }
};
export default picturesReducer;
