import * as actionType from "../actions/actionTypes";

const initialState = {
  showDropdown: false,
};

const showDropDownReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SHOW_DROPDOWN:
      return { ...state, showDropdown: action.showDropdown };

    default:
      return state;
  }
};

export default showDropDownReducer;
