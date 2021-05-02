import * as actionType from "../actions";

const initialState = {
  showDropDown: false,
};

const showDropDownReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case actionType.SHOW_DROPDOWN:
      return state.showDropDown;
    default:
      return state;
  }
};

export default showDropDownReducer;
