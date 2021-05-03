import * as actionType from "../actions/actionTypes";
import { companies } from "../../data";

const initialState = {
  companies,
  selectedCompany: companies[0],
};

const selectCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_COMPANIES:
      return { ...state, companies: action.companies };

    case actionType.SET_COMPANY:
      return { ...state, selectedCompany: action.selectedCompany };

    default:
      return state;
  }
};

export default selectCompanyReducer;
