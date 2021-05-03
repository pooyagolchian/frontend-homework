import * as actionTypes from "./actionTypes"

export const toggleDropdownAction = (toggle) => ({
  type: actionTypes.SHOW_DROPDOWN,
  showDropdown: toggle,
})
