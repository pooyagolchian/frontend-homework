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

const SelectCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SELECT_COMPANY:
      return state.companies;
    default:
      return state;
  }
};

export default SelectCompanyReducer;
