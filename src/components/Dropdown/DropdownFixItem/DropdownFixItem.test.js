import React from "react"
import DropdownFixItem from "./DropdownFixItem"
import { shallow, mount } from "enzyme"
import { Provider } from "react-redux"
import store from "../../../store"

describe("DropdownFixItem", () => {
  it("snapshot", () => {
    const DropdownFixItemComponent = shallow(
      <Provider store={store}>
        <DropdownFixItem />
      </Provider>
    ).dive()
    expect(DropdownFixItemComponent).toMatchSnapshot()
  })
  it('should set "color-red" css class for logout', () => {
    const text = "mock-id"
    const icon = "mock-id"
    const DropdownFixItemComponent = mount(
      <Provider store={store}>
        <DropdownFixItem text={text} icon={icon} />
      </Provider>
    )
    const wrapper = DropdownFixItemComponent.find("i")
    icon === "logout" ? expect(wrapper.hasClass("color-red")).toEqual(true) : false
  })
})
