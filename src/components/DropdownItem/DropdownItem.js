import React from "react";
import {connect} from "react-redux";
import DropdownFixItem from "../DropdownFixItem/DropdownFixItem";
import {dropdownItemAction} from "../../store/actions/dropdownItemAction";

const DropdownItem = (props) => {
    const {onChangeCompanyName, selectCompanies, companies} = props;

    return (
        <div className="nav__list">
            <div className="nav__list__item nav__list__item--company-divider">
                Your companies
            </div>
            <div className="nav__list__item__company">
                <div className="nav__list__item__company--wrapper">
                    {
                        companies.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    onClick={() => onChangeCompanyName(item)}
                                >
                                    <span> {item.value}</span>
                                    {item.value === selectCompanies.value ? (
                                        <i className="material-icons-outlined nav__list__item--icon">
                                            done
                                        </i>
                                    ) : null}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <DropdownFixItem icon='phone_iphone' text='Get the mobile app'/>
            <DropdownFixItem icon='people' text='Community'/>
            <DropdownFixItem icon='class' text='Knowledge base'/>
            <div className="nav__list__item--border"></div>
            <DropdownFixItem icon='settings' text='Settings'/>
            <DropdownFixItem icon='logout' text='Log out'/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    companies: state.selectCompanyReducer.companies,
    selectCompanies: state.selectCompanyReducer.selectCompanies,
});

const mapDispatchToProps = (dispatch) => ({
    onChangeCompanyName: (item) => dispatch(dropdownItemAction(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownItem);
