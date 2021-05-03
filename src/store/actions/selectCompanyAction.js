import * as actionTypes from "./actionTypes";

export const selectCompanyAction = (selectedCompany) => ({
  type: actionTypes.SET_COMPANY,
  selectedCompany,
});
