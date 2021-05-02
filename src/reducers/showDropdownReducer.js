import * as actionType from "../actions";

const initialState = {
  showDropDown: false,
};

const ShowDropDownReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SHOW_DROPDOWN:
      return state.showDropDown;
    default:
      return state;
  }
};

export default ShowDropDownReducer;
