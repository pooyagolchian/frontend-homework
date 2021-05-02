import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "./../../actions";

const DropdownItem = (props) => {
  return (
    <div className="nav__list">
      <div className=" nav__list__item nav__list__item--company-divider">
        Your companies
      </div>
      <div className="nav__list__item__company">
        <div>
          <div className="nav__list__item__company--wrapper">
            {props.companies.map((item, index) => {
              return (
                <div
                  key={item.id + index}
                  onClick={() => props.onChangeCompanyName(item)}
                >
                  <span> {item.value}</span>
                  {item.value === props.selectCompanies.value ? (
                    <i className="material-icons-outlined nav__list__item--icon">
                      done
                    </i>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="nav__list__item">
        <i className="material-icons-outlined nav__list__item--icon">
          phone_iphone
        </i>
        Get the mobile app
      </div>
      <div className="nav__list__item">
        <i className="material-icons-outlined nav__list__item--icon">people</i>
        Community
      </div>
      <div className="nav__list__item">
        <i className="material-icons-outlined nav__list__item--icon">class</i>
        Knowledge base
      </div>
      <div className="nav__list__item--border"></div>
      <div className="nav__list__item">
        <i className="material-icons-outlined nav__list__item--icon">
          settings
        </i>
        Settings
      </div>
      <div className="nav__list__item color-red">
        <i className="material-icons-outlined nav__list__item--icon">logout</i>
        Log out
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  companies: state.SelectCompanyReducer.companies,
  selectCompanies: state.SelectCompanyReducer.selectCompanies,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCompanyName: (item) => {
      dispatch({
        type: actionTypes.SET_COMPANY,
        payload: item,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownItem);
