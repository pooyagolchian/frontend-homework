import React from "react"
import Company from "./Company"
import { mount, shallow } from "enzyme"
import { Provider } from "react-redux"
import configureMockStore from "redux-mock-store"

describe("Company", () => {
  const mockStore = configureMockStore([])
  let store

  beforeEach(() => {
    store = mockStore({
      company: {
        selectedCompany: { value: "mock-name" },
      },
    })
  })

  it("snapshot", () => {
    const CompanyComponent = shallow(
      <Provider store={store}>
        <Company />
      </Provider>
    ).dive()

    expect(CompanyComponent).toMatchSnapshot()
  })

  it("should show company name", () => {
    const companyInfo = { id: "mock-id", value: "mock-name" }
    const CompanyComponent = mount(
      <Provider store={store}>
        <Company company={companyInfo} />
      </Provider>
    )
    const companyName = CompanyComponent.find("span")
    expect(companyName.text()).toContain("mock-name")
  })

  it('should set "selected-company" css class for selected company', () => {
    const companyInfo = { id: "mock-id", value: "mock-name" }
    const CompanyComponent = mount(
      <Provider store={store}>
        <Company company={companyInfo} />
      </Provider>
    )
    const wrapper = CompanyComponent.find("div")

    expect(wrapper.hasClass("selected-company")).toEqual(true)
  })

  it("should show check icon when company has selected", () => {
    const companyInfo = { id: "mock-id", value: "mock-name" }
    const CompanyComponent = mount(
      <Provider store={store}>
        <Company company={companyInfo} />
      </Provider>
    )
    const icon = CompanyComponent.find("i")
    expect(icon.exists()).toEqual(true)
  })

  it("should hideDropdown when a company clicked", () => {
    const spyHideDropdown = jest.spyOn(store, "dispatch")
    const companyInfo = { id: "mock-id", value: "mock-name" }
    const CompanyComponent = mount(
      <Provider store={store}>
        <Company company={companyInfo} />
      </Provider>
    )
    const expectedDispatch = {
      selectedCompany: { id: "mock-id", value: "mock-name" },
      type: "SET_COMPANY",
    }
    const wrapper = CompanyComponent.find("div")
    wrapper.simulate("click")

    expect(spyHideDropdown).toHaveBeenCalledTimes(2)
    expect(spyHideDropdown).toHaveBeenCalledWith(expectedDispatch)
  })
})
