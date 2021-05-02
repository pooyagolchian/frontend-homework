import * as actionType from "../actions/actionTypes";

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
  selectCompanies: {
    name: "",
  },
};

  const selectCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SELECT_COMPANY:
      return state.companies;

    case actionType.SET_COMPANY:
      return { ...state, selectCompanies: action.payload };
    default:
      return state;
  }
};

export default selectCompanyReducer;
