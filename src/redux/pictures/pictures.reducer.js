import picturesActionTypes from "./pictures.types";
const INITIAL_STATE = {
  properties:[ 
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
    },
    {
      index: 4,
      id: 5,
      url:
        "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/42393339_10155765127837393_8563673289346514944_o.jpg?_nc_cat=101&_nc_ohc=AQV0HupUPhMAQm6GuECQYsvepnuslQKya50ptgrZ48jlrkU4S0UVjzZAA&_nc_ht=scontent-frx5-1.xx&oh=377dbda6f6118bf6050424d45efdf0ba&oe=5E7F8CD6"
    },
    {
      index: 5,
      id: 6,
      url:
        "https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/s960x960/30052026_10155400911577393_7009478744700008772_o.jpg?_nc_cat=104&_nc_ohc=l0roNOj4POoAQnr763hkLAupKl9_VNYjmjxouBOzXLJKoklz6jtQ3dPiw&_nc_ht=scontent-frx5-1.xx&oh=fb74ae353ce1325912aa5fe46ca90813&oe=5E73903C"
    },
    {
      index: 6,
      id: 7,
      url:
        "https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/27788843_10155257135412393_1164699691389631492_o.jpg?_nc_cat=102&_nc_ohc=GKo4pHBTRWAAQmRLoabPvzqsO8GX7UFNJpneyD22GiKTL9fJki6ZzeWoA&_nc_ht=scontent-frx5-1.xx&oh=7dfbea88fa0bf8c3605110757d720caf&oe=5E8AF241"
    },
    {
      index: 7,
      id: 8,
      url:
        "https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/12139920_10153156441762393_7520606161683026793_o.jpg?_nc_cat=102&_nc_ohc=bMZ0AlxK5FEAQmRuf9CGwoP4LIEtee_mkFxpemAbis8g1617ZKl2avfiQ&_nc_ht=scontent-frx5-1.xx&oh=c6a2a4885f4806b0874242d1da2c362b&oe=5E420B4F"
    },
    {
      index: 8,
      id: 9,
      url:
        "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/12079605_10153145040062393_459234548038199331_n.jpg?_nc_cat=108&_nc_ohc=0Wu9SDWQRfQAQm7KEJbIc63gpq8XpE3AJQs8ffE5t66VumNY47LD811Iw&_nc_ht=scontent-frx5-1.xx&oh=72c1384483f2283606c874aa2173c791&oe=5E3F6A16"
    }
    
  ],

  activePicture: {
    index: 4,
    id: 5,
    url:
      "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/42393339_10155765127837393_8563673289346514944_o.jpg?_nc_cat=101&_nc_ohc=AQV0HupUPhMAQm6GuECQYsvepnuslQKya50ptgrZ48jlrkU4S0UVjzZAA&_nc_ht=scontent-frx5-1.xx&oh=377dbda6f6118bf6050424d45efdf0ba&oe=5E7F8CD6"
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
