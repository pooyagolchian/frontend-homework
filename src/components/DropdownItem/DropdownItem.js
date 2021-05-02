import React from "react";
import { connect } from "react-redux";

const DropdownItem = () => {
  const { companies } = this.props;

  const handleSelectCompany = () => {};
  return (
    <div>
      <div className=" nav__list__item nav__list__item--company-divider">
        Your companies
      </div>

      <div className="nav__list__item__company">
        <div>
          <div className="nav__list__item__company--wrapper">
            <div onClick={() => {}}>
              <span></span>
              <i className="material-icons-outlined nav__list__item--icon">
                done
              </i>
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
  companies: state.companies,
});

export default connect(mapStateToProps)(DropdownItem);
