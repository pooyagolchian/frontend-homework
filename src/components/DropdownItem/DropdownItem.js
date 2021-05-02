import React from "react";
import { connect } from "react-redux";

const DropdownItem = (props) => {
  console.log(props);
  return (
    <div>
      <div className=" nav__list__item nav__list__item--company-divider">
        Your companies
      </div>

      <div className="nav__list__item__company">
        <div>
          <div className="nav__list__item__company--wrapper">
            <div>
              {props.companies.map((item, index) => {
                return (
                  <div key={item.id + index}>
                    <span> {item.value}</span>
                    <i className="material-icons-outlined nav__list__item--icon">
                      done
                    </i>
                  </div>
                );
              })}
            </div>
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
});

export default connect(mapStateToProps)(DropdownItem);
