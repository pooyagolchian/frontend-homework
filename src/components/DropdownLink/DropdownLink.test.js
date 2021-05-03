import React from "react"
import DropdownLink from "./DropdownLink"
import { shallow, mount } from "enzyme"
import store from "../../store"
import { Provider } from "react-redux"

describe("DropdownLink", () => {
  it("snapshot", () => {
    const DropdownLinkTree = shallow(
      <Provider store={store}>
        <DropdownLink />
      </Provider>
    ).dive()
    expect(DropdownLinkTree).toMatchSnapshot()
  })
})
