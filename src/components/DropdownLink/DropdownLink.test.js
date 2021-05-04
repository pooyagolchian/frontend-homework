import React from "react"
import DropdownLink from "./DropdownLink"
import { shallow, mount } from "enzyme"
import { Provider } from "react-redux"
import configureMockStore from "redux-mock-store"

describe("DropdownLink", () => {
  const mockStore = configureMockStore([])
  let store

  beforeEach(() => {
    store = mockStore({
      company: {
        selectedCompany: { value: "mock-name" },
      },
      dropdown: {
        showDropdown: false,
      },
    })
  })

  it("should showDropdown when button clicked", () => {
    const spyShowDropdown = jest.spyOn(store, "dispatch")

    const DropdownLinkComponent = mount(
      <Provider store={store}>
        <DropdownLink />
      </Provider>
    )
    const wrapper = DropdownLinkComponent.find(".nav__link")
    wrapper.simulate("click")
    expect(spyShowDropdown).toHaveBeenCalledTimes(1)
  })

  it("should show icon after render", () => {
    const DropdownLinkComponent = mount(
      <Provider store={store}>
        <DropdownLink />
      </Provider>
    )
    const icon = DropdownLinkComponent.find("i")
    expect(icon.exists()).toEqual(true)
  })

  it("should show company name", () => {
    const DropdownLinkComponent = mount(
      <Provider store={store}>
        <DropdownLink />
      </Provider>
    )
    const companyName = DropdownLinkComponent.find(".nav__link-subtext")
    expect(companyName.text()).toContain("mock-name")
  })

  it("snapshot", () => {
    const DropdownLinkTree = shallow(
      <Provider store={store}>
        <DropdownLink />
      </Provider>
    ).dive()
    expect(DropdownLinkTree).toMatchSnapshot()
  })
})
