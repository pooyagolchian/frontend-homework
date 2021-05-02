import * as actionType from "../actions";

const initialState = {
  companies: [
    {
      id: 1,
      value: "Viljatootja AS",
    },
    {
      id: 2,
      value: "Tartu Agro OÜ",
    },
  ],
};

const selectCompanyReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case actionType.SELECT_COMPANY:
      return state.showDropDown;
    default:
      return state;
  }
};

export default selectCompanyReducer;
