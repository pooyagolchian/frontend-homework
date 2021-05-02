import React from "react";
import {connect} from "react-redux";
import {dropdownLinkAction} from "../../store/actions/dropdownLinkAction";

const DropdownLink = (props) => {
    console.log("DropdownLink", !props.showDropdown);

    return (
        <div className="nav__link" onClick={() => {
        }}>
            <div className="nav__link-text-wrapper">
                <div className="nav__link-text">Elon Musk</div>
                <div className="nav__link-subtext">
                    {props.selectCompanies.value
                        ? props.selectCompanies.value
                        : "Select your company"}
                </div>
            </div>
            <i className="material-icons-outlined nav__link-icon">settings</i>
        </div>
    );
};

const mapStateToProps = (state) => ({
    selectCompanies: state.selectCompanyReducer.selectCompanies,
    showDropdown: !state.showDropdownReducer.showDropdown,
});
const mapDispatchToProps = (dispatch) => ({
    onShowDropdown: () => dispatch(dropdownLinkAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownLink);
