import React from "react"
import { selectCompanyAction } from "../../../store/actions/selectCompanyAction"
import { connect } from "react-redux"
import { toggleDropdownAction } from "../../../store/actions/toggleDropdownAction"

const Company = ({ onCompanyChange, selectedCompany, company, hideDropdown }) => {
  const onCompanyChanged = () => {
    onCompanyChange(company)
    hideDropdown()
  }

  return (
    <>
      <div
        className={
          company.value === selectedCompany.value ? "selected-company" : null
        }
        onClick={() => onCompanyChanged()}
      >
        <span> {company.value}</span>
        {company.value === selectedCompany.value && (
          <i className="material-icons-outlined nav__list__item--icon">done</i>
        )}
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  selectedCompany: state.company.selectedCompany,
})

const mapDispatchToProps = (dispatch) => ({
  onCompanyChange: (item) => dispatch(selectCompanyAction(item)),
  hideDropdown: () => dispatch(toggleDropdownAction(false)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Company)
