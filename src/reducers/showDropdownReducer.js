import * as actionType from "../actions";

const initialState = {
  showDropdown: false,
};

const ShowDropDownReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SHOW_DROPDOWN:
      return { ...state, showDropdown: action.payload };
    default:
      return state;
  }
};

export default ShowDropDownReducer;
