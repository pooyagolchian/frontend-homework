import * as actionTypes from "./actionTypes";

export const dropdownItemAction = (item) => ({
  type: actionTypes.SET_COMPANY,
  payload: item,
});
