import {combineReducers} from "redux";
import selectCompanyReducer from "./selectCompanyReducer";
import showDropdownReducer from "./showDropDownReducer";

export default combineReducers({
    selectCompanyReducer,
    showDropdownReducer,
});
