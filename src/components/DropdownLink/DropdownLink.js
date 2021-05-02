import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "./../../actions";

const DropdownLink = (props) => {
  console.log("DropdownLink", props);

  return (
    <div
      className="nav__link"
      onClick={() => {
        console.log(!props.showDropdown);
      }}
    >
      <div className="nav__link-text-wrapper">
        <div className="nav__link-text">Elon Musk</div>
        <div className="nav__link-subtext">
          {props.selectCompanies.value
            ? props.selectCompanies.value
            : "Select your campany"}
        </div>
      </div>
      <i className="material-icons-outlined nav__link-icon">settings</i>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectCompanies: state.SelectCompanyReducer.selectCompanies,
  showDropdown: !state.ShowDropdownReducer.showDropdown,
});
const mapDispatchToProps = (dispatch) => {
  return {
    onShowDropdown: (state) => {
      dispatch({
        type: actionTypes.SHOW_DROPDOWN,
        payload: !state.ShowDropdownReducer.showDropdown,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownLink);
