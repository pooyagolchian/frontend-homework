import React from "react";
import DropdownFixItem from "../DropdownFixItem/DropdownFixItem";
import ComoanyItem from "../CompanyItem/CompanyItem";

const DropdownItem = () => {
  return (
    <div className="nav__list">
      <div className="nav__list__item nav__list__item--company-divider">
        Your companies
      </div>
      <ComoanyItem />
      <DropdownFixItem icon="phone_iphone" text="Get the mobile app" />
      <DropdownFixItem icon="people" text="Community" />
      <DropdownFixItem icon="class" text="Knowledge base" />
      <div className="nav__list__item--border"></div>
      <DropdownFixItem icon="settings" text="Settings" />
      <DropdownFixItem icon="logout" text="Log out" />
    </div>
  );
};

export default DropdownItem;
