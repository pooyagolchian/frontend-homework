import React from "react";
import { dropdownItemAction } from "../../store/actions/dropdownItemAction";
import { connect } from "react-redux";

const CompanyItem = (props) => {
  const { onChangeCompanyName, selectCompanies, companies } = props;

  return (
    <div className="nav__list__item__company">
      <div className="nav__list__item__company--wrapper">
        {companies.map((item) => {
          return (
            <div
              key={item.id}
              className={
                item.value === selectCompanies.value ? "selected-company" : null
              }
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
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  companies: state.selectCompanyReducer.companies,
  selectCompanies: state.selectCompanyReducer.selectCompanies,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCompanyName: (item) => dispatch(dropdownItemAction(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyItem);
