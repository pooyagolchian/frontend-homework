import React from "react"
import DropdownFixItem from "./DropdownFixItem"
import { shallow } from "enzyme"
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
})
