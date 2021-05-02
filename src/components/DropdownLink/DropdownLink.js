import React from "react";
import {connect} from "react-redux";
import {toggleDropdownAction} from "../../store/actions/toggleDropdownAction";

const DropdownLink = ({toggle, showDropdown, hideDropdown, selectedCompany}) => {

    const toggleDropdown = () => {
        toggle ? hideDropdown() : showDropdown()
    }

    return (
        <div className="nav__link" onClick={() => toggleDropdown()}>
            <div className="nav__link-text-wrapper">
                <div className="nav__link-text">Elon Musk</div>
                <div className="nav__link-subtext">
                    {selectedCompany.value}
                </div>
            </div>
            <i className="material-icons-outlined nav__link-icon">settings</i>
        </div>
    );
};

const mapStateToProps = (state) => ({
    selectedCompany: state.company.selectedCompany,
    toggle: state.dropdown.showDropdown
});

const mapDispatchToProps = (dispatch) => ({
    onShowDropdown: () => dispatch(toggleDropdownAction()),
    hideDropdown: () => dispatch(toggleDropdownAction(false)),
    showDropdown: () => dispatch(toggleDropdownAction(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownLink);
